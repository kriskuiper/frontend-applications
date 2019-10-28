import { h } from 'preact';

import { getExposFromStorage } from '../../../lib/expo-storage';

import Expo from '../../components/expo';

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/

const Expos = () => {
	const expos = getExposFromStorage();

	return (
		<section>
			<h1>Resultaten</h1>
			{expos.map(expo => (
				<Expo expo={expo} />
			))}
		</section>
	);
};

export default Expos;
