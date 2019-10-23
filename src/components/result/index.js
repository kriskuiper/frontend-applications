import { h, Component } from 'preact';
import style from './style.css';

import FixedRatio from '../fixed-ratio';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

class Result extends Component {
	state = { isInCurrentExpo: false }

	handleAddToExpo = () => {
		const { result, onAddToExpo } = this.props;

		this.setState({ isInCurrentExpo: true });
		onAddToExpo(result);
	}

	handleDeleteFromExpo = () => {
		const { result, onDeleteFromExpo } = this.props;

		this.setState({ isInCurrentExpo: false });
		onDeleteFromExpo(result);
	}

	render({ result }, { isInCurrentExpo }) {
		const { img, title, description } = result;

		return (
			<article class="result">
				<FixedRatio height={1} width={1}>
					<img src={img} alt={`Afbeelding van ${title}`} />
				</FixedRatio>
				<h2 class="result__title">{title}</h2>
				{description ? (
					<p class="result__description">
						{formatDescriptionForResult(description)}
					</p>
				) : ''}
				{isInCurrentExpo ? (
					<button onClick={this.handleDeleteFromExpo}>Delete from expo</button>
				) : (
					<button onClick={this.handleAddToExpo}>Add to expo</button>
				)}
			</article>
		);
	}
}

export default Result;
