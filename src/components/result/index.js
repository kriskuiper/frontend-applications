import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { addToExpo, deleteFromExpo } from '../../store/actions';

import FixedRatio from '../fixed-ratio';
import AppIcon from '../app-icon';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const mapStateToProps = (state) => ({
	currentExpo: state.currentExpo
});

const mapDispatchToProps = (dispatch) => ({
	addToExpo: (result) => { dispatch(addToExpo(result)); },
	deleteFromExpo: (result) => { dispatch(deleteFromExpo(result)); }
});

class Result extends Component {


	handleAddToExpo = () => {
		const { addToExpo, result } = this.props;

		return addToExpo(result);
	}

	handleDeleteFromExpo = () => {
		const { deleteFromExpo, result } = this.props;

		return deleteFromExpo(result);
	}

	render({ result, currentExpo }) {
		const { img, title, description } = result;
		const isInCurrentExpo = () => (
			currentExpo.results.find(object => object.id === result.id)
		);

		return (
			<article class={style.result}>
				<figure class={style['result__img-container']}>
					<FixedRatio height={1} width={1}>
						<img
							src={img}
							alt={`Afbeelding van ${title}`}
							class={style.result__img}
						/>
					</FixedRatio>
				</figure>
				<header class={style.result__header}>
					<h3 class={style.result__title}>{title}</h3>
					{isInCurrentExpo() ? (
						<button onClick={this.handleDeleteFromExpo}>
							<span class="sr-only">Delete from expo</span>
							<AppIcon icon="delete" />
						</button>
					) : (
						<button onClick={this.handleAddToExpo}>
							<span class="sr-only">Add to expo</span>
							<AppIcon icon="plus" />
						</button>
					)}
				</header>
				{description ? (
					<p class="result__description">
						{formatDescriptionForResult(description)}
					</p>
				) : ''}
			</article>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
