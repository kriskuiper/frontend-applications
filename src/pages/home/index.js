import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { setResults, setCurrentQuery } from '../../store/actions';

import fetchResultsForQuery from '../../../lib/fetch-results-for-query';
import choices from './choices';

import TitleInput from '../../components/title-input';
import ChoiceButton from '../../components/choice-button';

const mapStateToProps = (state) => ({
	currentQuery: state.currentQuery
});

const mapDispatchToProps = (dispatch) => ({
	setResults: (results) => { dispatch(setResults(results)); },
	setCurrentQuery: (query) => { dispatch(setCurrentQuery(query)); }
});

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/

class Home extends Component {
	state = { showTitleInput: false };

	handleShowTitleInput = (query) => {
		const { setCurrentQuery } = this.props;

		this.setState({ showTitleInput: true });
		setCurrentQuery(query);
	}

	handleTitleInputSubmit = async () => {
		const { setResults, currentQuery } = this.props;

		return fetchResultsForQuery(currentQuery, 0)
			.then(setResults)
			.catch(() => {
				throw new Error('Could not set new results');
			});
	}

	render() {
		return (
			<main>
				<h1>Maak je eigen expo</h1>
				<section class="content">
					<h2>Waarover wil je dat jouw expo gaat?</h2>
					<div class="home-page__choice-buttons">
						{choices.map(choice => (
							<ChoiceButton
								onChoiceButtonClick={this.handleShowTitleInput}
								query={choice.query}
								label={choice.label}
							/>
						))}
					</div>
					{this.state.showTitleInput
						? (
							<TitleInput onTitleInputSubmit={this.handleTitleInputSubmit} />
						)
						: ''}
				</section>
			</main>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
