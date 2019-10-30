const localStorage = typeof window !== 'undefined'
	? window.localStorage
	: '';

const sessionStorage = typeof window !== 'undefined'
	? window.sessionStorage
	: '';

/* Expos are being sent and pulled from localStorage */
export function getExposFromStorage() {
	const expos = JSON.parse(localStorage.getItem('expos'));

	return expos || [];
}

export function addExpoToStorage(expo) {
	const expos = JSON.parse(localStorage.getItem('expos'));
	const newExpos = expos
		? [...expos, expo]
		: [expo];

	return localStorage.setItem('expos', JSON.stringify(newExpos));
}

export function resetExposInStorage() {
	return localStorage.removeItem('expos');
}

/* Results are being sent and pulled from sessionStorage */
export function getResultsFromStorage() {
	const results = JSON.parse(sessionStorage.getItem('currentResults'));

	return results || null;
}

export function addResultsToStorage(results, clearPreviousResults) {
	const currentResults = getResultsFromStorage();

	if (clearPreviousResults) {
	return sessionStorage.setItem('currentResults', JSON.stringify(results));
}

	return sessionStorage.setItem('currentResults', JSON.stringify([
		...currentResults,
		...results
	]));
}

/* CurrentQuery is also being sent and pulled from sessionStorage */
export function addCurrentQueryToStorage(query) {
	return sessionStorage.setItem('currentQuery', query);
}

export function getCurrentQueryFromStorage() {
	return sessionStorage.getItem('currentQuery');
}

export function addPageNumberToStorage(pageNumber) {
	return sessionStorage.setItem('pageNumber', pageNumber);
}

export function getPageNumberFromStorage() {
	return Number(sessionStorage.getItem('pageNumber'));
}

export function isInStorage(key) {
	return sessionStorage.getItem(key);
}
