// src/reducers/todoReducer.js

import { List, Map } from 'immutable';
import { loadData } from '../actions/getDHISdata';

const init = Map({'entries': List([{
  namespace: "DEFAULT NAMESPACE",
  ids: ["DUMMY 1", "DUMMY 2"]
}])});

export default function collapsibleReducer(state=init, action) {
  switch (action.type) {
    case 'FETCH_SUCCESSFUL':
      return state.update('entries', entries => entries.push(Map(action.entries)));
    default:
      return state;
  }
}

// src/reducers/todoReducer.js
// EXAMPLE CODE
//import { List, Map } from 'immutable';
//
//const init = Map({'todos': List([])});
//
//export default function todoReducer(state=init, action) {
//  switch (action.type) {
//    case 'ADD_TODO':
//      return state.update('todos', todos => todos.push(Map(action.payload)));
//    case 'TOGGLE_TODO':
//      return state.update('todos', todos => todos.map(t => {
//        if(t.get('id') === action.payload) {
//          return t.update('isDone', isDone => !isDone);
//        } else {
//          return t;
//        }
//      }));
//    default:
//        return state;
//  }
//}
