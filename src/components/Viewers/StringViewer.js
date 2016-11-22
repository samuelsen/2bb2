import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

import TypePicker from './TypePicker';

class StringViewer extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        text: string,
        updateElement: React.PropTypes.func.isRequired,
        setType: React.PropTypes.func.isRequired,
    }

    render(){
        const { path, text, updateElement, setType } = this.props;

        return (
            <div>
                <input value={text} onChange={event => updateElement(path, event.target.value)} type="text"/>
            </div>
        );
    }
}

export default connect(null, InspectorActions)(StringViewer);