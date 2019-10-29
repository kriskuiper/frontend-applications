import { h } from 'preact';
import style from './style.css';

const Header = ({ title }) => (
	<header class={style.header}>
		<h1>{title}</h1>
	</header>
);

export default Header;
