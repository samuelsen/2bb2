// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import collapsibleReducer from './collapsibleReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    collapsibleList: collapsibleReducer,
    routing: routerReducer
});

export default rootReducer;
