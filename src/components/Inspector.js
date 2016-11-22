// src/components/CollapsibleList.js

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Immutable, { List } from 'immutable';
import JSONViewer from './Viewers/JSONViewer';

import * as InspectorActions from './../actions/Inspector';

var $ = require('jquery');

class Inspector extends Component {

  constructor(props) {
    super(props);
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
    putData: () => {},
  }

  render() {
    const { target, setTarget } = this.props;

    var textArea = <textarea id="jsonText" className="text-input" defaultValue={JSON.stringify(target)}/>;
    var jsonViewer = <label>Loading...</label>;
    if(target != null){
      jsonViewer = <JSONViewer path={List([])} target={target}/>;
    }

    const modal = (
      <div id='addModal' className="modal">
        <div className="modal-content">
          <p>test</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );


    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    /* TODO: CLEAN UP THIS MESS!!! */
    return (
      <div>
        {jsonViewer}
        {textArea}
        <button
          className="btn waves-effect waves-light red"
          onClick={event => setTarget(Immutable.fromJS(JSON.parse($("textarea#jsonText").val())))}>
            Import
        </button>
        <button
          className="btn waves-effect waves-light red"
          onClick={ event => {
            if(typeof target == "object") {
              this.props.putData(this.props.params.namespace, this.props.params.key, JSON.stringify(target.toJS()));
              return $("textarea#jsonText").val(JSON.stringify(target.toJS()));
            } else {
              this.props.putData(this.props.params.namespace, this.props.params.key, JSON.stringify(target));
              return $("textarea#jsonText").val(JSON.stringify(target));
            }}}>
          Export
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (namespace, key) => dispatch({
      type: "FETCH_DATA",
      namespace,
      key,
    }),
    putData: (namespace, key, data) => dispatch({
      type: "MODIFY_DATA",
      body: data,
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
