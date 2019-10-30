import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import {
	getCurrentQueryFromStorage,
	getPageNumberFromStorage,
	addPageNumberToStorage,
	addResultsToStorage
} from '../../../lib/browser-storage';

import { setResults } from '../../store/actions';

import Result from '../result';

const mapDispatchToProps = (dispatch) => ({
	setResults: (results) => { dispatch(setResults(results)); }
});

const getPageNumber = () => {
	let pageNumber = getPageNumberFromStorage();

	if (!pageNumber) {
		pageNumber = 0;
	}

	return pageNumber;
};

class ResultsList extends Component {
	handlePagination = async () => {
		const pageNumber = getPageNumber();
		const { setResults, currentQuery } = this.props;

		const storedQuery = getCurrentQueryFromStorage();
		const queryToUse = currentQuery ? currentQuery : storedQuery;

		const offset = pageNumber * 24;

		addPageNumberToStorage(pageNumber + 1);

		this.setState({ isPending: true });
		const offsetResults = await fetchResultsForQuery(queryToUse, offset);
		this.setState({ isPending: false });

		setResults(offsetResults);
		addResultsToStorage(offsetResults);
	};

	render({ results, haveAddToExpoButtons }, { isPending }) {
		const buttonText = isPending ? 'Wacht even...' : 'Laad meer';

		return (
			<div class="content">
				{results.map((result, i) => (
					<Result
						key={i}
						result={result}
						hasAddToExpoButton={haveAddToExpoButtons}
					/>
				))}

				{results.length > 0 ? (
					<button
						onClick={this.handlePagination}
						disabled={isPending}
					>
						{buttonText}
					</button>
				) : ''}
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(ResultsList);
