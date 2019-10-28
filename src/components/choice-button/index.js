import { h, Component } from 'preact';
import style from './style.css';

class ChoiceButton extends Component {
	handleClick = () => {
		const { onChoiceButtonClick, query } = this.props;

		return onChoiceButtonClick(query);
	}

	render() {
		const { label } = this.props;

		return (
			<button
				class={style['home-page__choice-button']}
				onClick={this.handleClick}
			>
				{label}
			</button>
		);
	}
}

export default ChoiceButton;
