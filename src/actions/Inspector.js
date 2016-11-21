
import {Map, List} from 'immutable';

export function updateElement(path, newValue){
    return {
        type: "UPDATE_ELEMENT",
        path: path,
        newValue: newValue
    };
}

export function updateName(path, newValue){
    return {
        type: "UPDATE_NAME",
        path: path,
        newValue: newValue
    };
}

export function setTarget(newTarget){
    return {
        type: "SET_TARGET",
        newTarget: newTarget
    };
}

export function addElement(path)
{
    return {
        type: "ADD_ELEMENT",
        path: path,
    };
}

export function setType(path, type){
    var val = null;

    switch(type){
        case "string": val = ""; break;
        case "number": val = 0; break;
        case "object": val = Map({}); break;
        case "array": val = List([]); break;
        case "boolean": val = true; break;
    }

    return {
        type: "UPDATE_ELEMENT",
        path: path,
        newValue: val,
    };
}

export function collapsibleInit(){
    return { type: "COLLAPSIBLE_INIT" };
}