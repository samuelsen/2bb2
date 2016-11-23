import { List, Map } from 'immutable';

function immutableDelete(array, item) {
  const idx = array.indexOf(item);
  return array.slice(0, idx).concat(array.slice(idx + 1));
}

export default function collapsibleReducer(state = new Map(), action) {
  switch (action.type) {
    case 'NAMESPACES_FETCHED':
      return state.set('entries', new List(action.entries));
    case 'KEYS_FETCHED':
      return state.update('entries', entries => entries.update(
        entries.findIndex(item => item.namespace === action.namespace),
        entry => ({ namespace: entry.namespace, ids: action.keys, visible: entry.visible })
      ));
    case 'DATA_CREATED':
      /* TODO */
      return state;
    case 'DATA_MODIFIED':
      /* TODO */
      return state;
    case 'NAMESPACE_DELETED':
      return state.update('entries', entries => entries.remove(
        entries.findIndex(item => item.namespace === action.namespace)
      ));
    case 'KEY_DELETED':
      return state.update('entries', entries => entries.update(
        entries.findIndex(item => item.namespace === action.namespace),
        entry => ({
          namespace: entry.namespace,
          ids: immutableDelete(entry.ids, action.key),
          visible: entry.visible,
        })
      ));
    case 'APPLY_FILTER':
      return state.update('entries', entries => entries.map(
        entry => ({
          namespace: entry.namespace,
          ids: entry.ids,
          visible: entry.namespace.indexOf(action.text) !== -1,
        })
      ));
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
