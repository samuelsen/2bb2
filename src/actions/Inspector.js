
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