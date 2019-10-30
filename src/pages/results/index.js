import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import {
	addExpoToStorage,
	getResultsFromStorage,
	addResultsToStorage,
	getCurrentQueryFromStorage,
	getPageNumberFromStorage,
	addPageNumberToStorage
} from '../../../lib/browser-storage';
import fetchResultsForQuery from '../../../lib/fetch-results-for-query';

import { setResults, clearExpo } from '../../store/actions';

import Header from '../../components/header';
import ResultsList from '../../components/results-list';
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
		isPending: false,
		floatingButtonText: 'Sla expo op'
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

	renderResults = (results) => {
		const storedResults = getResultsFromStorage();
		const resultsToUse = results.length > 0 ? results : storedResults;

		if (results.length > 0) {
			return (
				<ResultsList
					results={resultsToUse}
					haveAddToExpoButtons
				/>
			);
		}

		if (storedResults.length > 0) {
			return (
				<ResultsList
					results={resultsToUse}
					haveAddToExpoButtons
				/>
			);
		}

		return (
			<EmptyState buttonText="Probeer opnieuw" />
		);
	}

	render({ results, showFloatingButton }, { isPending, floatingButtonText }) {
		return (
			<main>
				<Header title="Resultaten" />
				{this.renderResults(results)}

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
