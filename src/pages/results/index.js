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
import EmptyState from '../../components/empty-state';
import FloatingButton from '../../components/floating-button';

const mapStateToProps = (state) => ({
	results: state.results,
	currentExpo: state.currentExpo,
	currentQuery: state.currentQuery,
	showFloatingButton: state.showFloatingButton
});

const mapDispatchToProps = (dispatch) => ({
	setResults: (results) => { dispatch(setResults(results)); },
	clearExpo: () => { dispatch(clearExpo()); }
});

class Results extends Component {
	state = {
		pageNumber: 1,
		isPending: false,
		floatingButtonText: 'Sla expo op'
	}

	getPageNumber = () => {
		const { pageNumber } = this.state;
		const resultsInStorage = getResultsFromStorage();

		return resultsInStorage
			? resultsInStorage.length / 24
			: pageNumber;
	}

	handleExposToStorage = () => {
		const { currentExpo, clearExpo } = this.props;

		this.setState({ floatingButtonText: 'Gelukt! 🤙' });

		setTimeout(() => {
			this.setState({ floatingButtonText: 'Sla expo op' });
		}, 2000);

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

		const offset = newPageNumber * 24;

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
			<EmptyState
				title="resultaten"
				buttonText="Probeer opnieuw"
			/>
		);
	}

	render({ results, showFloatingButton }, { isPending, floatingButtonText }) {
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
					text={floatingButtonText}
					onFloatingButtonClick={this.handleExposToStorage}
					showFloatingButton={showFloatingButton}
				/>
			</main>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
