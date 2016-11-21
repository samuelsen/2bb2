import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

import PairViewer from './PairViewer';
import TypePicker from './TypePicker';

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
                    <a className="btn-floating btn-medium waves-effect waves-light red right" href="#addModal" onClick={event => addElement(path)} style={{margin: 5}} ><i className="material-icons">add</i></a>
                </ul>   
            </div>
        );
    }
}

export default connect(null, InspectorActions)(ArrayViewer);