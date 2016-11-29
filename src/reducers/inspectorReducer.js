import Immutable, { Map } from 'immutable';

function updateName(target, path, name, newName) {
  console.log(newName);
  return target.updateIn(path, (val) => {
    const keys = val.keySeq().toArray();

    let newVal = Map({});

    newVal = newVal.withMutations((map) => {
      for (let i = 0; i < val.size; i += 1) {
        if (keys[i] === name) {
          map.set(newName, val.get(keys[i]));
        } else {
          map.set(keys[i], val.get(keys[i]));
        }
      }
    });

    return newVal;
  });
}

export default function inspectorReducer(state = new Map(), action) {
  switch (action.type) {
    case 'UPDATE_ELEMENT':
      if (action.path.count() === 0) {
        return state.set('target', action.newValue);
      }
      return state.update('target', target =>
        target.updateIn(action.path, () => action.newValue)
      );
    case 'UPDATE_NAME':
      let name = action.path.last();
      let path = action.path.splice(-1, 1);
      return state.update('target', target => target.updateIn(path, (val) => {
        const tmp = val.get(name);
        val = val.delete(name);
        return val.set(action.newValue, tmp);
      }));
    case 'SET_TARGET':
      return state.set('target', Immutable.fromJS(action.newTarget));
    case 'ADD_ELEMENT':
      document.collapsibleNeedsInit = true;
      return state.update('target', val => val.updateIn(action.path, (target) => {
        if (Map.isMap(target)) {
          return target.set('', '');
        }
        return target.push('');
      }));
    case 'DEL_ELEMENT':
      name = action.path.last();
      path = action.path.splice(-1, 1);
      return state.update('target', target => target.updateIn(path, (val) => {
        return val.delete(name);
      }));
    case 'COLLAPSIBLE_INIT':
      return state.set('initializeCollapsible', false);
    case 'DATA_FETCHED':
      document.collapsibleNeedsInit = true;
      console.log('reducer');
      console.log(action.data);
      console.log(Immutable.fromJS(action.data));
      return state.set('target', Immutable.fromJS(action.data));
    default:
      return state;
  }
}
