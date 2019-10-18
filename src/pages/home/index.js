import { h } from 'preact';
import { connect } from 'preact-redux';
import './style';
import { setResults } from '../../store/actions';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import choices from './choices';

const Home = ({ setResults }) => (
	<main>
		<h1>Maak je eigen expo</h1>
		{choices.map(choice => (
			<button>
				{choice.label}
			</button>
		))};
	</main>
);

export default connect(null, { setResults })(Home);
