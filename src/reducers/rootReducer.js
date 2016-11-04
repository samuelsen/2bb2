// src/rootReducer.js

import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  todoList: todoReducer,
});

export default rootReducer;
