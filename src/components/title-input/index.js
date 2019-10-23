import './style';
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { setExpoTitle } from '../../store/actions';

const mapDispatchToProps = { setExpoTitle };

class TitleInput extends Component {
	state = { input: '' }

	handleInput = (event) => {
		this.setState({ input: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.setExpoTitle(this.state.input);
		this.props.onTitleInputSubmit();
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
