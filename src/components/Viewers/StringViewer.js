import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

class StringViewer extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        text: string,
        updateElement: React.PropTypes.func.isRequired,
    }

    render(){
        const { path, text, updateElement } = this.props;

        return (
            <li>
                <input value={text} onChange={event => updateElement(path, event.target.value)} type="text"/>
            </li>
        );
    }
}

export default connect(null, InspectorActions)(StringViewer);