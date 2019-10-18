import { h, Component } from 'preact';
import './style';

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

export default Results;
