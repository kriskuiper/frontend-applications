import { createStore, combineReducers } from 'redux';
import { results, expos } from './reducers';

const rootReducer = combineReducers({ results, expos });
const defaultState = { results: ['henkie'], expos: [] };

const store = createStore(rootReducer, defaultState);

export default store;
