import { h } from 'preact';
import style from './style.css';

const Expo = ({ expo }) => {
	const { title, objects } = expo;

	return (
		<article>
			<h2>{title}</h2>
			{objects.map(object => (
				<div>
					<h3>{object.title}</h3>
				</div>
			))}
		</article>
	);
};

export default Expo;
