import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { addToExpo, deleteFromExpo } from '../../store/actions';

import FixedRatio from '../fixed-ratio';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const mapStateToProps = (state) => ({
	currentExpo: state.currentExpo
});

const mapDispatchToProps = (dispatch) => ({
	addToExpo: (result) => { dispatch(addToExpo(result)); },
	deleteFromExpo: (result) => { dispatch(deleteFromExpo(result)); }
});

class Result extends Component {
	isInCurrentExpo = () => {
		const { currentExpo, result } = this.props;

		return currentExpo.results.find(object => object.id === result.id);
	}

	handleAddToExpo = () => {
		const { addToExpo, result } = this.props;

		return addToExpo(result);
	}

	handleDeleteFromExpo = () => {
		const { deleteFromExpo, result } = this.props;

		return deleteFromExpo(result);
	}

	render({ result, isInCurrentExpo }) {
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
				{this.isInCurrentExpo() ? (
					<button onClick={this.handleDeleteFromExpo}>Delete from expo</button>
				) : (
					<button onClick={this.handleAddToExpo}>Add to expo</button>
				)}
			</article>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
