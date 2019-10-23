const storage = window.localStorage;

export function getExposFromStorage() {
	const expos = JSON.parse(storage.getItem('expos'));

	return expos || [];
}

export function addExpoToStorage(expo) {
	const expos = JSON.parse(storage.getItem('expos'));
	const newExpos = expos
		? [...expos, expo]
		: [expo];

	return storage.setItem('expos', JSON.stringify(newExpos));
}

export function resetExposInStorage() {
	return storage.removeItem('expos');
}
