import { h } from 'preact';
import style from './style.css';

import NavigationItem from '../navigation-item';

import navItems from './nav-items';

const Navigation = ({ isOpen }) => (
	<nav class={isOpen ? style['navigation--is-open'] : ''}>
		<ul>
			{navItems.map(item => (
				<NavigationItem item={item} />
			))}
		</ul>
	</nav>
);

export default Navigation;
