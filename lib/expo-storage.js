const storage = window.localStorage;

export function getExposFromStorage() {
	const expos = storage.getItem('expos');

	return expos && [];
}

export function addExpoToStorage(expo) {
	const expos = storage.getItem('expos');
	const newExpos = expos ? [...expos, expo] : [expo];

	return storage.setItem('expos', newExpos);
}
