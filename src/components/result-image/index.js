import { h, Component } from 'preact';
import style from './style.css';

/*
* This component fixes image reflow. Source is:
* https://www.voorhoede.nl/en/blog/say-no-to-image-reflow/
*/

class ResultImage extends Component {
	ratio() {
		const { height, width } = this.props;

		return height / width * 100;
	}

	render({ src, alt }) {
		return (
			<picture
				class={style['result-image']}
				style={{ paddingBottom: this.ratio() }}
			>
				<img
					src={src}
					alt={alt}
					class={style['result-image__content']}
				/>
			</picture>
		);
	}
}

export default ResultImage;
