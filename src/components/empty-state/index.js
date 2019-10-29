import { h } from 'preact';
import { Link } from 'preact-router';

const EmptyState = ({ title }) => (
	<div>
		<p>Je hebt nog geen {title}...  😭</p>
		<Link href="/" class="button">Start met maken</Link>
	</div>
);

export default EmptyState;
