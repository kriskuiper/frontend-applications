import { h } from 'preact';
import './style';

import ResultImage from '../result-image';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const Result = ({ result }) => {
	const { img, title, description } = result;

	return (
		<article class="result">
			<ResultImage
				height={1}
				width={1}
				src={img}
				alt={`image of ${title}`}
			/>
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
