import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { addExpoToStorage } from '../../../lib/expo-storage';
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

	handleExposToStorage = () => {
		const { currentExpo, clearExpo } = this.props;

		addExpoToStorage(currentExpo);
		clearExpo();
	}

	handlePagination = async () => {
		const { pageNumber } = this.state;
		const { setResults, currentQuery } = this.props;
		const newPageNumber = pageNumber + 1;

		this.setState({ pageNumber: newPageNumber });

		const offset = pageNumber * 24;

		this.setState({ isPending: true });
		const offsetResults = await fetchResultsForQuery(currentQuery, offset);
		this.setState({ isPending: false });

		setResults(offsetResults);
	}

	render({ results }, { isPending }) {
		const buttonText = isPending ? 'Wacht even...' : 'Laad meer';

		return (
			<main>
				<Header title="Resultaten" />
				<section class="content">
					{results.length > 0
						? results.map((result, i) => (
							<Result
								key={i}
								result={result}
							/>
						))
						: <p>Geen resultaten gevonden</p>
					}
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
