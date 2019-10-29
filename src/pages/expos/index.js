import { h } from 'preact';

import { getExposFromStorage } from '../../../lib/expo-storage';

import Header from '../../components/header';
import Expo from '../../components/expo';
import EmptyState from '../../components/empty-state';

/*
* Since useEffect and useState are only available in
* Preact v10 or higher I have to convert the component
* to a class if I want to use lifecyclehooks or state... :(
*/

const Expos = () => {
	const expos = getExposFromStorage();

	return (
		<main>
			<Header title="Jouw exposities" />
			<section class="content">
				{expos.lengty > 0
					? expos.map(expo => (
						<Expo expo={expo} />
					))
					: <EmptyState title="exposities" />
				}
			</section>
		</main>
	);
};

export default Expos;
