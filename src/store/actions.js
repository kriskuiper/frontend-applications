import {
	ADD_EXPO,
	RESET_EXPOS,
	SET_RESULTS,
	SET_EXPO_TITLE
} from './action-types';

export function addExpo(expo) {
	return { type: ADD_EXPO, expo };
}

export function resetExpos() {
	return { type: RESET_EXPOS, expos: [] };
}

export function setResults(results) {
	return { type: SET_RESULTS, results };
}

export function setExpoTitle(newTitle) {
	return { type: SET_EXPO_TITLE, newTitle };
}
