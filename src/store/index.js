import { createStore } from 'redux';

import {
	SET_RESULTS,
	SET_EXPO_TITLE,
	ADD_TO_EXPO,
	DELETE_FROM_EXPO,
	CLEAR_EXPO,
	SET_CURRENT_QUERY,
	TOGGLE_FLOATING_BUTTON
} from './action-types';

const defaultState = {
	results: [],
	currentExpo: {
		title: '',
		results: []
	},
	currentQuery: '',
	showFloatingButton: false
};

const rootReducer = (state = defaultState, action) => {
	if (action.type === SET_RESULTS) {
		const newResults = [...state.results, ...action.results];

		return {
			...state,
			results: newResults
		};
	}

	if (action.type === SET_EXPO_TITLE) {
		return {
			...state,
			currentExpo: {
				title: action.title,
				results: state.currentExpo.results
			}
		};
	}

	if (action.type === ADD_TO_EXPO) {
		const { result } = action;

		return {
			...state,
			currentExpo: {
				title: state.currentExpo.title,
				results: [ ...state.currentExpo.results, result ]
			}
		};
	}

	if (action.type === DELETE_FROM_EXPO) {
		const newResults = state.currentExpo.results.filter(result => (
			result.id !== action.result.id
		));

		return {
			...state,
			currentExpo: {
				title: state.currentExpo.title,
				results: newResults
			}
		};
	}

	if (action.type === CLEAR_EXPO) {
		return {
			...state,
			currentExpo: {
				title: '',
				results: []
			}
		};
	}

	if (action.type === SET_CURRENT_QUERY) {
		return {
			...state,
			currentQuery: action.query
		};
	}

	if (action.type === TOGGLE_FLOATING_BUTTON) {
		return {
			...state,
			showFloatingButton: action.show
		};
	}

	return state;
};

const store = createStore(rootReducer, defaultState);

export default store;
