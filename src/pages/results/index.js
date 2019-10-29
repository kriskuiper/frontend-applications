import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import {
	addExpoToStorage,
	getResultsFromStorage,
	addResultsToStorage,
	getCurrentQueryFromStorage
} from '../../../lib/browser-storage';
import fetchResultsForQuery from '../../../lib/fetch-results-for-query';

import { setResults, clearExpo } from '../../store/actions';

import Header from '../../components/header';
import Result from '../../components/result';
import FloatingButton from '../../components/floating-button';

const mapStateToProps = (state) => ({
	results: state.results,
	currentExpo: state.currentExpo,
	currentQuery: state.currentQuery
});

const mapDispatchToProps = (dispatch) => ({
	setResults: (results) => { dispatch(setResults(results)); },
	clearExpo: () => { dispatch(clearExpo()); }
});

class Results extends Component {
	state = {	pageNumber: 1, isPending: false }

	getPageNumber = () => {
		const { pageNumber } = this.state;
		const resultsInStorage = getResultsFromStorage();

		return resultsInStorage
			? resultsInStorage.length / 24
			: pageNumber;
	}

	handleExposToStorage = () => {
		const { currentExpo, clearExpo } = this.props;

		addExpoToStorage(currentExpo);
		clearExpo();
	}

	handlePagination = async () => {
		const pageNumber = this.getPageNumber();
		const { results, setResults, currentQuery } = this.props;
		const newPageNumber = pageNumber + 1;

		const storedQuery = getCurrentQueryFromStorage();
		const queryToUse = currentQuery ? currentQuery : storedQuery;

		this.setState({ pageNumber: newPageNumber });

		const offset = pageNumber * 24;

		this.setState({ isPending: true });
		const offsetResults = await fetchResultsForQuery(queryToUse, offset);
		this.setState({ isPending: false });

		addResultsToStorage([
			...results,
			...offsetResults
		]);
		setResults(offsetResults);
	}

	renderResults = (results, storedResults) => {
		if (results.length > 0) {
			return results.map((result, i) => (
				<Result
					key={i}
					result={result}
					hasAddToExpoButton
				/>
			));
		}

		if (storedResults.length > 0) {
			return storedResults.map((result, i) => (
				<Result
					key={i}
					result={result}
					hasAddToExpoButton
				/>
			));
		}

		return (
			<p>Geen resultaten gevonden</p>
		);

	}

	render({ results }, { isPending }) {
		const buttonText = isPending ? 'Wacht even...' : 'Laad meer';
		const storedResults = getResultsFromStorage();

		return (
			<main>
				<Header title="Resultaten" />
				<section class="content">
					{this.renderResults(results, storedResults)}
					<button
						onClick={this.handlePagination}
						disabled={isPending}
					>
						{buttonText}
					</button>
				</section>
				<FloatingButton
					text="Sla expo op"
					onFloatingButtonClick={this.handleExposToStorage}
				/>
			</main>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
