import React, { Component } from 'react';
import ConfirmDelete from './ConfirmDelete';

export default class Collapsible extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.removeNamespace = this.removeNamespace.bind(this);
    this.removeKey = this.removeKey.bind(this);
  }

  state: {
    open: boolean,
  }

  getIcon() {
    return (
      this.state.open ? 'visibility_off' : 'visibility'
    );
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  props: {
    namespace: string,
    ids: string[],
    deleteKey: () => {},
    deleteNamespace: () => {},
  }


  render() {
    return (
      <li>
        <div className="right btn-delete">
          <a className="modal-trigger right btn-margs black-link" href={`#deleteConfirm-${this.props.namespace}`.replace(/ /g, '-')}>
            <i className="material-icons">delete</i>
          </a>
        </div>
        {/* MODAL BUTTON GOES HERE */}
        <div className="right btn-delete">
          <a className="modal-trigger right btn-margs black-link" href={`#${this.props.namespace}`}>
            <i className="material-icons">add</i>
          </a>
        </div>
        {/* END MODAL BUTTON */}
        <div className="collapsible-header" onClick={this.toggleOpen}>
          <i className="material-icons right collapsible-border">{this.getIcon()}</i>
          {this.props.namespace}
        </div>
        <ConfirmDelete
          id={`${this.props.namespace}`}
          namespace={this.props.namespace}
          key={null}
          type={'namespace'}
          deleteKey={this.props.deleteKey}
          deleteNamespace={this.props.deleteNamespace}
        />
        <div className="collapsible-body">
          {this.props.ids.map(id =>
            <div>
              <p>
                {id}
                <a className="right btn-margs black-link valign-wrapper modal-trigger" href={`#deleteConfirm-${id}`.replace(/ /g, '-')} >
                  <i className="material-icons valign">delete</i>
                  Delete
                </a>
                <a href={`view/${this.props.namespace}/${id}`} className="right btn-margs black-link valign-wrapper  btn-border">
                  <i className="material-icons valign">open_in_new</i>
                  View
                </a>
              </p>
              <ConfirmDelete
                id={`${id}`}
                namespace={this.props.namespace}
                key2={id}
                type={'key'}
                deleteKey={this.props.deleteKey}
                deleteNamespace={this.props.deleteNamespace}
              />
            </div>
          )}
        </div>
      </li>
    );
  }
}
