import { h } from 'preact';
import style from './style.css';

import FixedRatio from '../fixed-ratio';
import Result from '../result';

const Expo = ({ expo }) => {
	const { title, results } = expo;

	const firstFourResults = () => results.slice(0, 4);

	return (
		<article class={style.expo}>
			<h2 class={style.expo__title}>{title}</h2>
			<div>
				<figure class={style['expo__img-container']}>
					{firstFourResults().map(result => (
						<FixedRatio width={1} height={1}>
							<img src={result.img} class={style.expo__img} />
						</FixedRatio>
					))}
					<figcaption class="sr-only">
						Afbeeldingen van de eerste vier werken uit expositie, genaamd: {title}
					</figcaption>
				</figure>
				<details>
					<summary>Objecten in deze expo</summary>
					{results.map(result => (
						<Result result={result} />
					))}
				</details>
			</div>
		</article>
	);
};

export default Expo;
