
import { List, Map } from 'immutable';
import { loadData } from '../actions/getDHISdata';

const init = Map({ 
    target: Map({
        'dummyObject': Map({  
          'dummy1': 'd1', 
          'dummy2': Map({
            "a": "faggot"
          })}), 
        dummyList: List([1, 2, "dummy3"]), 
        "": "test"}),
    initializeCollapsible: false});

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
      if(action.path.count() == 0)
        return state.update('target', (target) => action.newValue);
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
      var newState = state.update("target", val => val.updateIn(action.path, (target) => { 
        if(Map.isMap(target))
          return target.set("", "");
        else
          return target.push("");
      }));
      if(typeof target == "object")
        return newState.update("initializeCollapsible", (val) => true);
      return newState;
    case 'COLLAPSIBLE_INIT':
      return state.update("initializeCollapsible", (val) => false);
    default:
      return state;
  }
}