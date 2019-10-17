import { h } from 'preact';
import './style';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import choices from './choices';

const Home = () => (
	<main>
		<h1>Maak je eigen expo</h1>
		{choices.map(choice => (
			<button>
				{choice.label}
			</button>
		))};
	</main>
);

export default Home;
