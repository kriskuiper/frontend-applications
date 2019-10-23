import { createStore, combineReducers } from 'redux';

import { results, expoTitle } from './reducers';

const rootReducer = combineReducers({
	results,
	expoTitle
});

const defaultState = {
	results: [],
	expoTitle: { value: '' }
};

const store = createStore(rootReducer, defaultState);

store.subscribe(() => console.log('Updated! ', store.getState()));

export default store;
