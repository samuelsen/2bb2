
import { List, Map } from 'immutable';
import { loadData } from '../actions/getDHISdata';

const init = Map({ target: Map({'dummyObject': Map({'dummy1': 'd1', 'dummy2': 'asd'}), dummyList: List([1, 2, "dummy3"]), "": "test"}) });

function updateElement(target, elementPath, newValue){
  if(elementPath.size == 0){
    return newValue;
  } else {
    return updateElement(target.get(elementPath.first()), elementPath.pop(), newValue);
  }
}

export default function inspectorReducer(state=init, action) {
  switch (action.type) {
    case 'UPDATE_ELEMENT':
      return state.update('target', (target) => target.updateIn(action.path, (val) => action.newValue));
    case 'UPDATE_NAME':
      var name = action.path.last();
      var path = action.path.splice(-1,1);
      return state.update('target', (target) => target.updateIn(path, (val) => {
        var tmp = val.get(name);
        val = val.delete(name);
        return val.set(action.newValue, tmp);
      }));
    case 'SET_TARGET':
      return state.update('target', (target) => action.newTarget);
    case 'ADD_ELEMENT':
      console.log(action.path.toArray());
      return state.update("target", val => val.updateIn(action.path, (target) => {
        console.log(target);
        if(Map.isMap(target))
          return target.set("", "");
        else
          return target.push("");
      }));
    default:
      return state;
  }
}