import { h, Component } from 'preact';

import style from './style.css';

import FixedRatio from '../fixed-ratio';
import Result from '../result';

class Expo extends Component {
	state = { detailsOpen: false }

	handleToggle = (event) => {
		this.setState({ detailsOpen: event.target.open });
	}

	renderResults = (detailsOpen) => {
		const { results } = this.props.expo;

		return detailsOpen
			? results.map(result => (
				<Result result={result} />
			)) : '';
	}

	render({ expo }, { detailsOpen }) {
		const { title, results } = expo;
		const firstFourResults = () => results.slice(0, 4);

		return (
			<article class={style.expo}>
				<h2 class={style.expo__title}>{title}</h2>
				<div>
					<figure class={style['expo__img-container']}>
						{firstFourResults().map(result => (
							<div class={style['expo__fixed-ratio-container']}>
								<FixedRatio width={1} height={1}>
									<img src={result.img} class={style.expo__img} />
								</FixedRatio>
							</div>
						))}
						<figcaption class="sr-only">
							Afbeeldingen van de eerste vier werken uit expositie, genaamd: {title}
						</figcaption>
					</figure>
					<details onToggle={this.handleToggle}>
						<summary class={style.expo__summary}>Objecten in deze expo</summary>
						{this.renderResults(detailsOpen)}
					</details>
				</div>
			</article>
		);
	}
}

export default Expo;
