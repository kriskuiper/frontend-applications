import queriesWithOffset from './queries-with-offset';

const endpoint = 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-21/sparql';

export default function(queryName, offsetNumber) {
	const query = queriesWithOffset(offsetNumber)[queryName];

	return `${endpoint}?query=${encodeURIComponent(query)}&format=json`;
}
