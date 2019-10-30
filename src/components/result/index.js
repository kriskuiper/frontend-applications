import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.css';

import { addToExpo, deleteFromExpo, toggleFloatingButton } from '../../store/actions';

import FixedRatio from '../fixed-ratio';
import AppIcon from '../app-icon';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const mapStateToProps = (state) => ({
	currentExpo: state.currentExpo,
	showFloatingButton: state.showFloatingButton
});

const mapDispatchToProps = (dispatch) => ({
	addToExpo: (result) => { dispatch(addToExpo(result)); },
	deleteFromExpo: (result) => { dispatch(deleteFromExpo(result)); },
	toggleFloatingButton: (show) => { dispatch(toggleFloatingButton(show)); }
});

class Result extends Component {
	handleAddToExpo = () => {
		const {
			addToExpo,
			toggleFloatingButton,
			result,
			showFloatingButton
		} = this.props;

		if (!showFloatingButton) {
			toggleFloatingButton(true);
		}

		return addToExpo(result);
	}

	handleDeleteFromExpo = () => {
		const {
			deleteFromExpo,
			toggleFloatingButton,
			result,
			currentExpo } = this.props;

		if (currentExpo.results.length === 1) {
			toggleFloatingButton(false);
		}

		return deleteFromExpo(result);
	}

	render({ result, currentExpo, hasAddToExpoButton }) {
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
					{/* @TODO: REFACTOR THIS!!! */}
					{hasAddToExpoButton
						? isInCurrentExpo() ? (
							<button
								class={style['result__add-to-expo-button']}
								onClick={this.handleDeleteFromExpo}
							>
								<span class="sr-only">Delete from expo</span>
								<AppIcon icon="delete" />
							</button>
						) : (
							<button
								class={style['result__add-to-expo-button']}
								onClick={this.handleAddToExpo}
							>
								<span class="sr-only">Add to expo</span>
								<AppIcon icon="plus" />
							</button>
						) : ''
					}
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
