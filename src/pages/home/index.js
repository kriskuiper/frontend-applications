import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { setResults } from '../../store/actions';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import choices from './choices';

import TitleInput from '../../components/title-input';
import ChoiceButton from '../../components/choice-button';


const mapDispatchToProps = { setResults };

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/

class Home extends Component {
	state = {
		showTitleInput: false,
		query: ''
	};

	handleShowTitleInput = (query) => {
		this.setState({ showTitleInput: true });
		this.setState({ query });
	}

	handleTitleInputSubmit = async () => {
		const { setResults } = this.props;
		const { query } = this.state;

		return fetchResultsForQuery(query, 0)
			.then(setResults)
			.catch(error => {
				throw new Error('Could not set new results');
			});
	}

	render() {
		return (
			<main>
				<h1>Maak je eigen expo</h1>
				{choices.map(choice => (
					// @TODO: maak een subcomponent aan
					<ChoiceButton
						onChoiceButtonClick={this.handleShowTitleInput}
						query={choice.query}
						label={choice.label}
					/>
				))}
				{this.state.showTitleInput
					? (
						<TitleInput onTitleInputSubmit={this.handleTitleInputSubmit} />
					)
					: ''}
			</main>
		);
	}
}

export default connect(null, mapDispatchToProps)(Home);
