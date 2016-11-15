// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import collapsibleReducer from './collapsibleReducer';
import inspectorReducer from './inspectorReducer';

const rootReducer = combineReducers({
  collapsibleList: collapsibleReducer,
  inspector: inspectorReducer,
});

export default rootReducer;
