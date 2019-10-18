import { h } from 'preact';
import './style';

import Expo from '../../components/expo';

const Expos = () => {

	/* @TODO: get expos from localStorage */
	const expos = [];

	return (
		<main>
			{expos.map(expo => (
				<Expo expo={expo} />
			))}
		</main>
	);
};

export default Expos;
