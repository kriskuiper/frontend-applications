import { h, Component, useCallback } from 'preact';
import { connect } from 'preact-redux';
import './style';
import { setResults } from '../../store/actions';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import choices from './choices';

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/
class Home extends Component {
	state = {
		expoTitle: '',
		showTitleInput: false,
		query: ''
	};

	handleShowTitleInput() {
		const { showTitleInput } = this.state;

		return this.setState('showTitleInput', !showTitleInput);
	}

	setNewResults() {
		const { query } = this.state;
		const newResults = fetchResultsForQuery(query, 0);

		return setResults(newResults);
	}

	render() {
		return (
			<main>
				<h1>Maak je eigen expo</h1>
				{choices.map(choice => (
					<button onClick={this.handleTitleInputOpen}>
						{choice.label}
					</button>
				))};
			</main>
		);
	}
}

export default connect({ }, { setResults })(Home);
