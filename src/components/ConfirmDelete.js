import React, { Component } from 'react';

export default class ConfirmDelete extends Component {

  constructor(props) {
    super(props);
    document.modalNeedsInit = true;

    this.removeNamespace = this.removeNamespace.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.remove = this.remove.bind(this);
  }

  props: {
    id: string,
    key2: string,
    namespace: string,
    type: string,
    deleteKey: () => {},
    deleteNamespace: () => {},
  }

  removeNamespace() {
    this.props.deleteNamespace(this.props.namespace);
  }

  removeKey() {
    this.props.deleteKey(this.props.namespace, this.props.key2);
  }

  remove() {
    if (this.props.type === 'namespace') {
      this.removeNamespace();
    } else if (this.props.type === 'key') {
      this.removeKey();
    }
  }

  render() {
    const id = this.props.id.replace(/ /g, '-');
    return (
      <div id={`deleteConfirm-${id}`} className="modal">
        <div className="modal-content">
          <h4>Delete <b>{this.props.id}</b></h4>
          <p>Do you want to delete the namspace <b>&quot;{this.props.id}&quot;</b> ?</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat btn-margs">No, keep</a>
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn red btn-margs" onClick={this.remove}>Yes, delete</a>
        </div>
      </div>
    );
  }
}
