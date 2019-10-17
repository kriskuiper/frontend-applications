import { createStore, combineReducers } from 'react-redux';
import { results, expos } from './reducers';

const rootReducer = combineReducers({ results, expos });

export default createStore(rootReducer, { results: [], expos: [] });
