import {
	SET_RESULTS,
	SET_EXPO_TITLE
} from './action-types';

export function setResults(results) {
	return { type: SET_RESULTS, results };
}

export function setExpoTitle(title) {
	return { type: SET_EXPO_TITLE, title };
}
