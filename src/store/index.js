import { createStore } from 'redux';

import { SET_RESULTS, SET_EXPO_TITLE } from './action-types';


const defaultState = {
	results: [],
	expoTitle: ''
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
			expoTitle: action.title
		};
	}

	return state;
};

const store = createStore(rootReducer, defaultState);

store.subscribe(() => console.log('Updated! ', store.getState()));

export default store;
