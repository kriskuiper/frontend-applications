import './style';
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { setExpoTitle } from '../../store/actions';

class TitleInput extends Component {
	state = { input: '' }

	handleInput(event) {
		this.setState('input', event.target.value);
	}

	handleSubmit(event) {
		event.preventDefault();

		return setExpoTitle(this.state.input);
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

export default connect(null, setExpoTitle)(TitleInput);
