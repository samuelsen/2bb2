import { List, Map } from 'immutable';

export default function collapsibleReducer(state = new Map(), action) {
  switch (action.type) {
    case 'NAMESPACES_FETCHED':
      return state.set('entries', new List(action.entries));
    case 'KEYS_FETCHED':
      return state.update('entries', entries => entries.update(
        entries.findIndex(item => item.namespace === action.namespace),
        entry => ({ namespace: entry.namespace, ids: action.keys })
      ));
    case 'DATA_FETCHED':
      /* TODO */
      return state;
    case 'DATA_CREATED':
      /* TODO */
      return state;
    case 'DATA_MODIFIED':
      /* TODO */
      return state;
    case 'NAMESPACE_DELETED':
      /* TODO */
      return state;
    case 'KEY_DELETED':
      /* TODO */
      return state;
    case 'FETCH_FAILED':
    case 'CREATE_FAILED':
    case 'DELETE_FAILED':
    case 'MODIFY_FAILED':
      // console.log(action.error.responseText);
      /* TODO */
      return state;
    default:
      return state;
  }
}
