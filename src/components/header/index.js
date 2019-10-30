import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

import AppIcon from '../app-icon';

const Header = ({ title }) => (
	<header class={style.header}>
		<h1>{title}</h1>
		<Link href="/expos" class={style.header__link}>
			<span class="sr-only">Naar expos</span>
			<AppIcon icon="collections" />
		</Link>
	</header>
);

export default Header;
