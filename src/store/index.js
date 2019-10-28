import { createStore } from 'redux';

import {
	SET_RESULTS,
	SET_EXPO_TITLE,
	ADD_TO_EXPO,
	DELETE_FROM_EXPO,
	CLEAR_EXPO,
	SET_CURRENT_QUERY
} from './action-types';


const defaultState = {
	results: [],
	currentExpo: {
		title: '',
		results: {}
	},
	currentQuery: ''
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
		const newResults = { ...state.currentExpo.results };

		newResults[action.result.id] = action.result.title;

		return {
			...state,
			currentExpo: {
				title: state.currentExpo.title,
				results: newResults
			}
		};
	}

	if (action.type === DELETE_FROM_EXPO) {
		const newResults = { ...state.currentExpo.results };

		delete newResults[action.result.id];

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
				results: {}
			}
		};
	}

	if (action.type === SET_CURRENT_QUERY) {
		return {
			...state,
			currentQuery: action.query
		};
	}

	return state;
};

const store = createStore(rootReducer, defaultState);

export default store;
