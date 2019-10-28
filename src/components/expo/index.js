import { h } from 'preact';
import style from './style.css';

import FixedRatio from '../fixed-ratio';
import Result from '../result';

const Expo = ({ expo }) => {
	const { title, objects } = expo;

	const firstFourObjects = () => objects.slice(0, 4);

	return (
		<article class={style.expo}>
			<h2 class={style.expo__title}>{title}</h2>
			{objects.map(object => (
				<div>
					<figure class={style['expo__img-container']}>
						{firstFourObjects().map(result => (
							<FixedRatio width={1} height={1}>
								<img src={result.img} class={style.expo__img} />
							</FixedRatio>
						))}
						<figcaption class="sr-only">
							Afbeeldingen van de eerste vier werken uit expositie genaamd {title}
						</figcaption>
					</figure>
					<details>
						<summary>Objecten in deze expo</summary>
						{object.results.map(result => (
							<Result result={result} />
						))}
					</details>
				</div>
			))}
		</article>
	);
};

export default Expo;
