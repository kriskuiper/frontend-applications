import { h } from 'preact';
import './style';

import { useSelector } from 'react-redux';

import Expo from '../../components/expo';

const Expos = () => {

	/* @TODO: get expos from localStorage */
	const expos = useSelector(state => state.expos);

	return (
		<main>
			{expos.map(expo => (
				<Expo expo={expo} />
			))}
		</main>
	);
};

export default Expos;
