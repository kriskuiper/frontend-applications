import { createStore, combineReducers } from 'react-redux';
import { results, expos } from './reducers';

const rootReducer = combineReducers({ results, expos });
const defaultState = { results: [], expos: [] };

const store = createStore(rootReducer, defaultState);

export default store;
