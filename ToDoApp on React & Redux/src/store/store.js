import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { save } from 'redux-localstorage-simple';

const store = createStore(reducer, applyMiddleware(save({ namespace: 'todo' })));

export default store;

