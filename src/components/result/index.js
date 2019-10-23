import { h } from 'preact';
import style from './style.css';

import FixedRatio from '../fixed-ratio';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const Result = ({ result }) => {
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
		</article>
	);
};

export default Result;
