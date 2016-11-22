import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

var $ = require('jquery');

class TypePicker extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        type: string,
        setType: React.PropTypes.func.isRequired,
    }

    render(){
        const { path, type, setType } = this.props;

        return (
            <select defaultValue={type} className="browser-default" onChange={event => setType(path, event.target.value)}>
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="object">object</option>
                <option value="array">array</option>
                <option value="boolean">boolean</option>
            </select>
        );
    }
}

export default connect(null, InspectorActions)(TypePicker);

export function getType(target){
    if(target == null)
        return "null";

    if(Map.isMap(target))
        return "object";

    if(List.isList(target))
        return "array";

    return typeof target;
}