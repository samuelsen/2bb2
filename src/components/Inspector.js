import { connect } from 'react-redux';
import React, { Component } from 'react';
import { List } from 'immutable';
import JSONViewer from './Viewers/JSONViewer';

const $ = require('jquery');

class Inspector extends Component {
  constructor(props) {
    super(props);
    this.setImportValue = this.setImportValue.bind(this);
    this.saveValue = this.saveValue.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(this.props.params.namespace, this.props.params.key);
  }

  setImportValue() {
    document.getElementById('inserted-json').value = JSON.stringify(this.props.target);
  }

  saveValue() {
    if (typeof target === 'object') {
      this.props.putData(
        this.props.params.namespace,
        this.props.params.key,
        JSON.stringify(this.props.target.toJS())
      );
      return $('#inserted-json').val(JSON.stringify(this.props.target.toJS()));
    }
    this.props.putData(
      this.props.params.namespace,
      this.props.params.key,
      JSON.stringify(this.props.target)
    );
    return $('#inserted-json').val(JSON.stringify(this.props.target));
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
      <div id="modal1" className="modal bottom-sheet insert-json-modal">
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
          <div className="col s12 m6 right">
            <button className="btn btn-margs waves-effect waves-light red col s5 m4 right" onClick={this.saveValue}>
              Save
            </button>
            <a className="waves-effect waves-light btn btn-margs red col s6 m4 right" href="#modal1" onClick={this.setImportValue}>Import</a>
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
