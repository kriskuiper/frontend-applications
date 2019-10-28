import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { addExpoToStorage } from '../../../lib/expo-storage';
import fetchResultsForQuery from '../../../lib/fetch-results-for-query';

import { setResults, clearExpo } from '../../store/actions';

import Result from '../../components/result';

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
	state = {	pageNumber: 1 }

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
		const offsetResults = await fetchResultsForQuery(currentQuery, offset);

		setResults(offsetResults);
	}

	render({ results, currentExpo }) {
		return (
			<section>
				<h2>Resultaten:</h2>
				<button onClick={this.handleExposToStorage}>Get expo's to localStorage</button>
				{results.map((result, i) => (
					<Result
						key={i}
						result={result}
					/>
				))}
				<button onClick={this.handlePagination}>Load more</button>
			</section>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
