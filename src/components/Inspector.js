// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import JSONViewer from './Viewers/JSONViewer';
import Immutable, { List } from 'immutable'

import * as InspectorActions from './../actions/Inspector';

var $ = require('jquery');

class Inspector extends Component {

  constructor(props) {
    super(props);
  }
  
  props: {
    target: "defaultString",
    setTarget: React.PropTypes.func.isRequired,
  }

  tick(){
    console.log("test");
  }

  render() {
    const { target, setTarget } = this.props;

    var textArea = <textarea id="jsonText" className="text-input" defaultValue={JSON.stringify(target)}/>; 
    if(target.toJS)
      <textarea id="jsonText" defaultValue={JSON.stringify(target.toJS())}/>

    
    const modal = <div id='addModal' className="modal">
                    <div className="modal-content">
                        <p>test</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                  </div>; 

    return (<div>
              <JSONViewer path={List([])} target={target}/>
              {textArea}                
              <button className="btn waves-effect waves-light red" onClick={event => setTarget(Immutable.fromJS(JSON.parse($("textarea#jsonText").val())))}>Import</button>
              <button className="btn waves-effect waves-light red" onClick={event => {
                console.log(target);
                if(typeof target == "object")
                  return $("textarea#jsonText").val(JSON.stringify(target.toJS()));
                else
                  return $("textarea#jsonText").val(JSON.stringify(target));
              }}>Export</button>
            </div>); 
  }
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}

export default connect(mapStateToProps, InspectorActions)(Inspector);
