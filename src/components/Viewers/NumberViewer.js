import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

import TypePicker from './TypePicker';

class NumberViewer extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        number: number,
        updateElement: React.PropTypes.func.isRequired,
    }

    render(){
        const { path, number, updateElement } = this.props;

        return (
            <div>
                <input type="number" pattern="[0-9]*" inputMode="numeric" value={number} onChange={event => updateElement(path, Number(event.target.value))}/>
            </div>
        );
    }
}

export default connect(null, InspectorActions)(NumberViewer);