import { connect } from 'react-redux';
import React, { Component } from 'react';
import { List } from 'immutable';
import JSONViewer from './Viewers/JSONViewer';
import CollapsibleSearch from './CollapsibleSearch';

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
    const modal = (
      <div id="modal1" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Insert JSON data</h4>
          <textarea id="inserted-json" className="text-input" />
        </div>
        <div className="modal-footer">
          <button
            className="btn red modal-action modal-close waves-effect waves-green"
            onClick={() => setTarget(JSON.parse($('#inserted-json').val()))}
          >
            Import
          </button>
        </div>
      </div>
    );

    let jsonViewer = <div className="progress white"><div className="indeterminate red" /></div>;
    if (target != null) {
      jsonViewer = <JSONViewer path={new List([])} target={target} />;
    }

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="col s6 input-field">
              <input id="search" type="text" />
              <label htmlFor="search">Search</label>
            </div>
            <button
              className="btn btn-margs waves-effect waves-light red right"
              onClick={() => {
                if (typeof target === 'object') {
                  this.props.putData(
                    this.props.params.namespace,
                    this.props.params.key,
                    JSON.stringify(target.toJS())
                  );
                  return $('#inserted-json').val(JSON.stringify(target.toJS()));
                }
                this.props.putData(
                  this.props.params.namespace,
                  this.props.params.key,
                  JSON.stringify(target)
                );
                return $('#inserted-json').val(JSON.stringify(target));
              }}
            >
              Save
        </button>
            <a className="waves-effect waves-light btn btn-margs red right" href="#modal1">Import</a>
          </div>
        </div>
        <hr />
        {jsonViewer}
        {modal}
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
    setTarget: newTarget => dispatch({
      type: 'SET_TARGET',
      newTarget,
    }),
  };
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);
