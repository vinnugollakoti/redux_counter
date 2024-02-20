import { legacy_createStore } from 'redux';
import counterReducer from './Reducers';

const store = legacy_createStore(counterReducer);

export default store;