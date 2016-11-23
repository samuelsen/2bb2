import { connect } from 'react-redux';
import React, { Component } from 'react';
import Immutable, { List } from 'immutable';
import JSONViewer from './Viewers/JSONViewer';

import * as InspectorActions from './../actions/inspectorActions';

const $ = require('jquery');

class Inspector extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.params.namespace, this.props.params.key);
  }

  props: {
    params: {
      namespace: React.PropTypes.string,
      key: React.PropTypes.string,
    },
    target: React.PropTypes.string,
    setTarget: React.PropTypes.func.isRequired,
    fetchData: React.PropTypes.func.isRequired,
    putData: React.PropTypes.func.isRequired,
  }

  render() {
    const { target, setTarget } = this.props;

    const textArea = <textarea id="jsonText" className="text-input" defaultValue={JSON.stringify(target)} />;
    let jsonViewer = <label>Loading...</label>;
    if (target != null) {
      jsonViewer = <JSONViewer path={new List([])} target={target} />;
    }

    return (
      <div>
        {jsonViewer}
        {textArea}
        <button
          className="btn waves-effect waves-light red"
          onClick={() =>
            setTarget(Immutable.fromJS(JSON.parse($('textarea#jsonText').val())))
          }
        >
          Import
        </button>
        <button
          className="btn waves-effect waves-light red"
          onClick={() => {
            if (typeof target === 'object') {
              this.props.putData(
                this.props.params.namespace,
                this.props.params.key,
                JSON.stringify(target.toJS())
              );
              return $('textarea#jsonText').val(JSON.stringify(target.toJS()));
            }
            this.props.putData(
              this.props.params.namespace,
              this.props.params.key,
              JSON.stringify(target)
            );
            return $('textarea#jsonText').val(JSON.stringify(target));
          }}
        >
          Export
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (namespace, key) => dispatch({
      type: 'FETCH_DATA',
      namespace,
      key,
    }),
    putData: (namespace, key, data) => dispatch({
      type: 'MODIFY_DATA',
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
