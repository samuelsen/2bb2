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

  render() {
    const { target, setTarget } = this.props;

    var textArea = <textarea id="jsonText" defaultValue={JSON.stringify(target)}/>; 
    if(target.toJS)
      <textarea id="jsonText" defaultValue={JSON.stringify(target.toJS())}/>

    
    return (<div>
              {textArea}                
              <button className="btn waves-effect waves-light" onClick={event => setTarget(Immutable.fromJS(JSON.parse($("textarea#jsonText").val())))}>Import</button>
              <button className="btn waves-effect waves-light" onClick={event => $("textarea#jsonText").val(JSON.stringify(target.toJS()))}>Export</button>
              <JSONViewer path={List([])} target={target}/>
            </div>); 
  }
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}

export default connect(mapStateToProps, InspectorActions)(Inspector);
