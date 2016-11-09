// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import collapsibleReducer from './collapsibleReducer';

const rootReducer = combineReducers({
  collapsibleList: collapsibleReducer,
});

export default rootReducer;
