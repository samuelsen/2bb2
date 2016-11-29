import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddKeyModal extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    document.modalNeedsInit = true;
  }

  props: {
    namespace: string,
    createData: () => {},
    updateNamespace: () => {},
  }

  save(e) {
    e.preventDefault();
    const newKey = document.getElementById(`Key${this.props.namespace}`).value;
    document.getElementById(`Key${this.props.namespace}`).value = '';
    this.props.createData(this.props.namespace, newKey);
    this.props.updateNamespace(this.props.namespace);
  }

  render() {
    return (
      <div>
        <div id={this.props.namespace} className="modal bottom-sheet">
          <form onSubmit={this.save}>
            <div className="modal-content">
              <h4>Add key to <b>{this.props.namespace}</b></h4>
              <div className="input-field">
                <input id={`Key${this.props.namespace}`} type="text" />
                <label htmlFor={`Key${this.props.namespace}`}>Key</label>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-light red btn right btn-margs">Close</a>
              <input className="btn right waves-effect waves-light green btn-margs" type="submit" value="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createData: (namespace, key) => dispatch({
      type: 'CREATE_DATA',
      inCreate: false,
      namespace,
      key,
      body: '{}',
    }),
    updateNamespace: namespace => dispatch({
      type: 'FETCH_KEYS',
      namespace,
    }),
  };
}

export default connect(null, mapDispatchToProps)(AddKeyModal);
