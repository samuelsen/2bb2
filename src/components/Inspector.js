// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import JSONViewer from './Viewers/JSONViewer';
import Immutable, { List } from 'immutable';
import { loadData } from './../actions/datastoreApi'

import * as InspectorActions from './../actions/Inspector';

var $ = require('jquery');

class Inspector extends Component {

  constructor(props) {
    super(props);

    const { namespace, key } = this.props.params;

    //var data = loadData(namespace + "/" + key);

    //console.log(data);

    //this.props.setTarget(JSON.parse(data));
  }

  componentDidMount() {
    this.props.fetchData(this.props.params.namespace, this.props.params.key);
  }
  
  props: {
    params: {
      namespace: string,
      key: string,
    },
    target: "defaultString",
    setTarget: React.PropTypes.func.isRequired,
    fetchData: () => {},
  }

  render() {
    const { target, setTarget } = this.props;

    var textArea = <textarea id="jsonText" defaultValue={JSON.stringify(target)}/>;

    var jsonViewer = <label>Loading...</label>;
    if(target != null){
      jsonViewer = <JSONViewer path={List([])} target={target}/>;

      if(target.toJS)
        <textarea id="jsonText" defaultValue={JSON.stringify(target.toJS())}/> 
    }
    
    const modal = <div id='addModal' className="modal">
                    <div className="modal-content">
                        <p>test</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                  </div>; 

    return (<div>
              {textArea}                
              <button className="btn waves-effect waves-light" onClick={event => setTarget(Immutable.fromJS(JSON.parse($("textarea#jsonText").val())))}>Import</button>
              <button className="btn waves-effect waves-light" onClick={event => {
                console.log(target);
                if(typeof target == "object")
                  return $("textarea#jsonText").val(JSON.stringify(target.toJS()));
                else
                  return $("textarea#jsonText").val(JSON.stringify(target));
              }}>Export</button>
              {jsonViewer}
            </div>); 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (namespace, key) => dispatch({
      type: "FETCH_DATA",
      namespace,
      key,
    }),
    InspectorActions,
  };
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);
