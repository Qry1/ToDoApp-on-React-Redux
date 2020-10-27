import { combineReducers } from 'redux';
import tasks from './tasks';
import filter from './filters';
import check from './checks'

const reducer = combineReducers({ tasks, filter, check });

export default reducer;