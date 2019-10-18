import { h } from 'preact';
import './style';

const formatDescriptionForResult = description => description.replace(/<br>/gi, '');

const Result = ({ result }) => {
	const { img, title, description } = result;

	return (
		<article class="result">
			<img src={img} alt={`image of ${title}`} />
			<h2 class="result__title">{title}</h2>
			<p class="result__description">
				{formatDescriptionForResult(description)}
			</p>
		</article>
	);
};

export default Result;
