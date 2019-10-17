import { h } from 'preact';
import './style';

import Result from '../../components/result/result';

const Results = ({ results }) => (
	<section>
		<h2>Resultaten: </h2>
		{results.map(result => {
			<Result result={result} />;
		})}
	</section>
);

export default Results;
