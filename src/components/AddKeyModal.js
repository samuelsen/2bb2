import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddKeyModal extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    console.log(this.props);
  }

  props: {
    namespace: string,
    createData: () => {},
  }

  save(e) {
    e.preventDefault();
    const newKey = document.getElementById(`Key${this.props.namespace}`).value;
    document.getElementById(`Key${this.props.namespace}`).value = '';
    console.log(newKey);
    //this.props.createData(this.props.namespace, newKey);
  }

  render() {
    return (
      <div>
        {/* TRIGGER */}
        <a className="modal-trigger waves-effect waves-light btn" href={`#${this.props.namespace}`}>
          Modal
        </a>
        {/* MODAL */}
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
              <a href="#!" className="modal-action modal-close waves-effect waves-light red btn right">Close</a>
              <input className="btn right waves-effect waves-light green" type="submit" value="Save" />
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
      namespace,
      key,
      body: '{}',
    }),
  };
}

export default connect(null, mapDispatchToProps)(AddKeyModal);
