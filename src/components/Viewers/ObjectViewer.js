import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

import PairViewer from './PairViewer';
import TypePicker from './TypePicker';
import AddButton from './AddButton';

class ObjectViewer extends Component{
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

        var values = target.keySeq().toArray().sort((a,b) => {
            if(a == "")
                return 1;
            else if(b == "")
                return -1;
            else return a > b;
        });

        var content = <label>Empty Object</label>;
        if(target.size > 0)
            content = values.map(v =>
                        <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
                    );

        return (
            <div>
                <ul className="collapsible" data-collapsible="expandable" style={{marginBottom: 50}}>
                    {content}
                    <AddButton path={path}/>
                </ul>   
            </div>
        );
    }
}

export default connect(null, InspectorActions)(ObjectViewer);