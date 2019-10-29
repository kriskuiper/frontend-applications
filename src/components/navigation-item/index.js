import { h } from 'preact';
import { Link } from 'preact-router';

const NavigationItem = ({ item }) => (
	<li><Link href={item.link}>{item.label}</Link></li>
);

export default NavigationItem;
