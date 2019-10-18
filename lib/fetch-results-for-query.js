import formatUrlWithQuery from './format-url-with-query';

export default function(query, offsetNumber) {
	const endpoint = formatUrlWithQuery(query, offsetNumber);

	return fetch(endpoint)
		.then(response => response.json())
		.then(data => data.results.bindings)
		.then(objects => objects.map(object => ({
			id: object.result && object.result.value,
			img: object.img && object.img.value,
			title: object.title && object.title.value,
			description: object.description && object.description.value
		})))
		.catch(error => {
			console.error(error);
			throw new Error(`Could not get results for query: ${query}`);
		});
}
