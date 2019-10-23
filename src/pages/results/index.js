import { h } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import Result from '../../components/result';

const mapStateToProps = (state) => {
	return {
		results: state.results,
		expoTitle: state.expoTitle.value
	};
};

const Results = ({ expoTitle, results }) => (
	<section>
		<h2>Resultaten:</h2>
		{results.map(result => (
			<Result result={result} />
		))}
	</section>
);


export default connect(mapStateToProps)(Results);
