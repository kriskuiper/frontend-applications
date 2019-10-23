import './style';
import { h, Component } from 'preact';

class ChoiceButton extends Component {
	handleClick = () => {
		const { onChoiceButtonClick, query } = this.props;

		return onChoiceButtonClick(query);
	}

	render() {
		const { label } = this.props;

		return (
			<button onClick={this.handleClick}>
				{label}
			</button>
		);
	}
}

export default ChoiceButton;
