import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import './style';

import { results } from '../../store/reducers';

import Result from '../../components/result/result';

class Results extends Component {
	state = { currentExpo: [] };

	render({ results }, { }) {
		return (
			<section>
				<h2>Resultaten: </h2>
				{results.map(result => {
					<Result result={result} />;
				})}
			</section>
		);
	}
}

export default connect(results, null)(Results);
