import {
	SET_RESULTS,
	SET_EXPO_TITLE,
	ADD_TO_EXPO,
	DELETE_FROM_EXPO,
	CLEAR_EXPO,
	SET_CURRENT_QUERY,
	TOGGLE_FLOATING_BUTTON
} from './action-types';

export function setResults(results) {
	return { type: SET_RESULTS, results };
}

export function setExpoTitle(title) {
	return { type: SET_EXPO_TITLE, title };
}

export function addToExpo(result) {
	return { type: ADD_TO_EXPO, result };
}

export function deleteFromExpo(result) {
	return { type: DELETE_FROM_EXPO, result };
}

export function clearExpo() {
	return { type: CLEAR_EXPO };
}

export function setCurrentQuery(query) {
	return { type: SET_CURRENT_QUERY, query };
}

export function toggleFloatingButton(show) {
	return { type: TOGGLE_FLOATING_BUTTON, show };
}
