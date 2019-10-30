import { h } from 'preact';
import { Link } from 'preact-router';

const EmptyState = ({ title, buttonText }) => (
	<div>
		<p>Je hebt nog geen {title}...  😭</p>
		<Link href="/" class="button">{buttonText}</Link>
	</div>
);

export default EmptyState;
