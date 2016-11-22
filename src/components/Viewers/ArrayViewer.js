import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

import PairViewer from './PairViewer';
import TypePicker from './TypePicker';
import AddButton from './AddButton';

class ArrayViewer extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        target: object,
        updateElement: React.PropTypes.func.isRequired, 
        addElement: React.PropTypes.func.isRequired,
    }

    render(){
        const { path, target, updateElement, addElement } = this.props;

        var values = target.keySeq().toArray();

        return (
            <div>
                <ul className="collapsible" data-collapsible="expandable" style={{marginBottom: 50}}>
                    {values.map(v =>
                        <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
                    )}
                    <AddButton path={path}/>
                </ul>   
            </div>
        );
    }
}

export default connect(null, InspectorActions)(ArrayViewer);