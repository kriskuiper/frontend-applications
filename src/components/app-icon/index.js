import { h } from 'preact';

import style from './style.css';

const AppIcon = ({ icon }) => (
	<img
		class={style['app-icon']}
		src={`../../assets/icons/${icon}.svg`}
		alt=""
	/>
);

export default AppIcon;
