// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import collapsibleReducer from './collapsibleReducer';
import inspectorReducer from './inspectorReducer';

const rootReducer = combineReducers({
  collapsibleList: collapsibleReducer,
  inspector: inspectorReducer,
  routing: routerReducer,
});

export default rootReducer;
