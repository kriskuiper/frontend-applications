const localStorage = typeof window !== 'undefined'
	? window.localStorage
	: '';

const sessionStorage = typeof window !== 'undefined'
	? window.sessionStorage
	: '';

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

export function getResultsFromStorage() {
	const results = JSON.parse(sessionStorage.getItem('currentResults'));
	console.log(results);

	return results || null;
}

export function addResultsToStorage(results) {
	return sessionStorage.setItem('currentResults', JSON.stringify(results));
}
