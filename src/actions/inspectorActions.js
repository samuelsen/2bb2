import { Map, List } from 'immutable';


export function updateElement(path, newValue) {
  return {
    type: 'UPDATE_ELEMENT',
    path,
    newValue,
  };
}

export function updateName(path, newValue) {
  return {
    type: 'UPDATE_NAME',
    path,
    newValue,
  };
}

export function setTarget(newTarget) {
  return {
    type: 'SET_TARGET',
    newTarget,
  };
}

export function addElement(path) {
  return {
    type: 'ADD_ELEMENT',
    path,
  };
}

export function delElement(path) {
  return {
    type: 'DEL_ELEMENT',
    path,
  };
}

export function setType(path, type) {
  let val = null;

  switch (type) {
    case 'string': val = ''; break;
    case 'number': val = 0; break;
    case 'object': val = new Map({}); break;
    case 'array': val = new List([]); break;
    case 'boolean': val = true; break;
    default: val = null; break;
  }

  return {
    type: 'UPDATE_ELEMENT',
    newValue: val,
    path,
  };
}

export function collapsibleInit() {
  return { type: 'COLLAPSIBLE_INIT' };
}
