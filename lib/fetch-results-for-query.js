import formatUrlWithQuery from './format-url-with-query';

export default function(query, offsetNumber) {
	const endpoint = formatUrlWithQuery(query, offsetNumber);

	return fetch(endpoint)
		.then(response => response.json())
		.then(data => data.results.bindings)
		.catch(error => {
			throw new Error(`Could not get results for query: ${query}`, error);
		});
}
