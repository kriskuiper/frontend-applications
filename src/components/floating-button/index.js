import { h } from 'preact';
import style from './style.css';

const FloatingButton = ({ text, onFloatingButtonClick }) => (
	<button
		onClick={onFloatingButtonClick}
		class={style['floating-button']}
	>
		{text}
	</button>
);

export default FloatingButton;
