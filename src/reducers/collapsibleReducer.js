// src/reducers/todoReducer.js

import { List, Map } from 'immutable';
import { loadData } from '../actions/getDHISdata';

const init = Map({'entries': List([{
  namespace: "DEFAULT NAMESPACE",
  ids: ["DUMMY 1", "DUMMY 2"]
}])});

export default function collapsibleReducer(state=init, action) {
  switch (action.type) {
    case 'NAMESPACES_FETCHED':
      return state.set('entries', List(action.entries));
    case 'KEYS_FETCHED':
      return state.update('entries', entries => entries.update(
        entries.findIndex(item => item.namespace === action.namespace),
        entry => { return { namespace: entry.namespace, ids: action.keys } }
      ));
    case 'DATA_FETCHED':
      console.log(action.data);
      return state;
    case 'DATA_CREATED':
      console.log(action.data);
      return state;
    case 'NAMESPACE_DELETED':
      console.log(action.data);
      return state;
    case 'KEY_DELETED':
      console.log(action.data);
      return state;
    case 'FETCH_FAILED':
    case 'CREATE_FAILED':
    case 'DELETE_FAILED':
    case 'MODIFY_FAILED':
      console.log(action.error.responseText);
      return state;
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
