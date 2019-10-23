import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { addExpoToStorage } from '../../../lib/expo-storage';

import Result from '../../components/result';

const mapStateToProps = (state) => ({
	results: state.results,
	expoTitle: state.expoTitle.value
});

class Results extends Component {
	state = {
		expoTitle: '',
		expoObjects: []
	}

	getCurrentExpo = () => ({
		title: this.state.expoTitle,
		objects: this.state.expoObjects
	})

	handleAddToCurrentExpo = (result) => {
		const { expoTitle } = this.props;
		const { expoObjects } = this.state;

		// If there's no title yet, set the title
		if (!this.state.expoTitle) {
			this.setState({ expoTitle });
		}

		this.setState({ expoObjects: [...expoObjects, result ] });
	}

	handleDeleteFromCurrentExpo = (result) => {
		const { expoObjects } = this.state;
		const filteredObjects = expoObjects.filter(expoObject => (
			expoObject.id !== result.id
		));

		this.setState({ expoObjects: filteredObjects });
	}

	handleExposToStorage = () => {
		const currentExpo = {
			title: this.state.expoTitle,
			objects: this.state.expoObjects
		};

		addExpoToStorage(currentExpo);

		this.setState({ expoObjects: {} });
		this.setState({ expoTitle: '' });
	}

	render({ results }) {
		return (
			<section>
				<h2>Resultaten:</h2>
				<button onClick={this.handleExposToStorage}>Get expo's to localStorage</button>
				{results.map((result, i) => (
					<Result
						key={i}
						result={result}
						onAddToExpo={this.handleAddToCurrentExpo}
						onDeleteFromExpo={this.handleDeleteFromCurrentExpo}
					/>
				))}
			</section>
		);
	}
}


export default connect(mapStateToProps)(Results);
