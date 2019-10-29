import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { setExpoTitle } from '../../store/actions';
import { route } from 'preact-router';

const mapDispatchToProps = { setExpoTitle };

class TitleInput extends Component {
	state = { input: '', isPending: false };

	handleInput = (event) => {
		this.setState({ input: event.target.value });
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { input } = this.state;
		const { setExpoTitle, onTitleInputSubmit } = this.props;

		setExpoTitle(input);

		this.setState({ isPending: true });
		await onTitleInputSubmit();
		this.setState({ isPending: false });

		route('/results');
	}

	render({}, { isPending }) {
		const buttonText = isPending ? 'Wacht even...' : 'Zoek objecten';

		return (
			<form onSubmit={this.handleSubmit} class={style['title-input']}>
				<label class={style['title-input__label']}>Geef je nieuwe titel een naam </label>
				<input type="text" onInput={this.handleInput} class={style['title-input__input']} />
				<button
					class={style['title-input__button']}
					disabled={isPending}
				>
					{buttonText}
				</button>
			</form>
		);
	}
}

export default connect(null, mapDispatchToProps)(TitleInput);
