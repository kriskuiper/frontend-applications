import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { setExpoTitle } from '../../store/actions';
import { route } from 'preact-router';

const mapDispatchToProps = { setExpoTitle };

class TitleInput extends Component {
	state = { input: '' }

	handleInput = (event) => {
		this.setState({ input: event.target.value });
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		this.props.setExpoTitle(this.state.input);
		await this.props.onTitleInputSubmit();
		route('/results');
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Wat is de titel van je nieuwe expositie?</label>
				<input type="text" onInput={this.handleInput} />
			</form>
		);
	}
}

export default connect(null, mapDispatchToProps)(TitleInput);
