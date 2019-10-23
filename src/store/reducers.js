import {
	SET_RESULTS,
	SET_EXPO_TITLE
} from './action-types';

export function results(state = [], action) {
	switch (action.type) {
		case SET_RESULTS:
			return [
				...state,
				...action.results
			];
		default:
			return state;
	}
}

export function expoTitle(state = '', action) {
	switch (action.type) {
		case SET_EXPO_TITLE:
			return {
				...state,
				value: action.title
			};
		default:
			return state;
	}
}
