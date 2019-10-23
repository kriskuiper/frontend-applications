import { h, Component } from 'preact';
import style from './style.css';

/*
* This component fixes image reflow. Source is:
* https://www.voorhoede.nl/en/blog/say-no-to-image-reflow/
*/

class FixedRatio extends Component {
	ratio() {
		const { height, width } = this.props;

		return height / width * 100;
	}

	render({ children }) {
		return (
			<div
				class={style['fixed-ratio']}
				style={{ paddingBottom: this.ratio() }}
			>
				<div class={style['fixed-ratio__content']}>
					{children}
				</div>
			</div>
		);
	}
}

export default FixedRatio;
