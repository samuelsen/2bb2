import Immutable, { Map } from 'immutable';

const init = new Map({
  target: null,
});

function updateElement(target, elementPath, newValue) {
  if (elementPath.size === 0) {
    return newValue;
  }
  return updateElement(
    target.get(elementPath.first()),
    elementPath.pop(),
    newValue
  );
}

export default function inspectorReducer(state = init, action) {
  switch (action.type) {
    case 'UPDATE_ELEMENT':
      if (action.path.count() === 0) {
        return state.set('target', action.newValue);
      }
      return state.update('target', target =>
        target.updateIn(action.path, () => action.newValue)
      );
    case 'UPDATE_NAME':
      return state.update('target', target =>
        target.updateIn(action.path.splice(-1, 1), (val) => {
          const tmp = val.get(action.path.last());
          val.delete(action.path.last());
          return val.set(action.newValue, tmp);
        }));
    case 'SET_TARGET':
      return state.set('target', action.newTarget);
    case 'ADD_ELEMENT':
      return state.update('target', val => val.updateIn(action.path, (target) => {
        if (Map.isMap(target)) {
          return target.set('', '');
        }
        return target.push('');
      }));
    case 'COLLAPSIBLE_INIT':
      return state.set('initializeCollapsible', false);
    case 'DATA_FETCHED':
      return state.set('target', Immutable.fromJS(action.data));
    default:
      return state;
  }
}
