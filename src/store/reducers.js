import { ADD_EXPO, RESET_EXPOS, SET_RESULTS } from './action-types';

export function expos(state = [], action) {
	const { expo } = action;

	switch (action.type) {
		case (ADD_EXPO): {
			return { ...state, expo };
		}
		case (RESET_EXPOS): {
			state = [];
		}
	}

	return state;
}

export function results(state = [], action) {
	switch (action.type) {
		case (SET_RESULTS): {
			return { ...state, results };
		}
	}

	return state;
}
