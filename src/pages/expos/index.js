import { h, Component } from 'preact';
import style from './style.css';

import { getExposFromStorage } from '../../../lib/expo-storage';

import Expo from '../../components/expo';

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/
class Expos extends Component {
	state = {
		expos: []
	}

	componentWillMount() {
		this.state.expos = getExposFromStorage();
	}

	render() {
		const { expos } = this.state;

		return (
			<main>
				{expos.map(expo => (
					<Expo expo={expo} />
				))}
			</main>
		);
	}
}

export default Expos;
