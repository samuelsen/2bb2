// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import collapsibleReducer from './collapsibleReducer';

const rootReducer = combineReducers({
  collapsibleList: collapsibleReducer,
  routing: routerReducer,
});

export default rootReducer;
