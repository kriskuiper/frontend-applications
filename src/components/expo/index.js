import { h } from 'preact';
import style from './style.css';

const Expo = ({ expo }) => {
	const { title, objects } = expo;

	const firstFourObjects = () => objects.slice(0, 4);

	return (
		<article>
			<h2>{title}</h2>
			{objects.map(object => (
				<div>
					<figure>
						{firstFourObjects().map(result => (
							<img src={result.img} />
						).slice(0, 3))}
						<figcaption class="sr-only">Afbeeldingen van expo {title}</figcaption>
					</figure>
				</div>
			))}
		</article>
	);
};

export default Expo;
