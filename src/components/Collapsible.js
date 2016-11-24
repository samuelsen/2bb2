// src/components/Collapsible.js

import React, { Component } from 'react';
import Create from './Create';

const $ = require('jquery');

export default class Collapsible extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.removeNamespace = this.removeNamespace.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.addKey = this.addKey.bind(this);
  }

  state: {
    open: boolean,
  }

  getIcon() {
    return (
      this.state.open ? 'visibility_off' : 'visibility'
    );
  }

  addKey() {
    console.log(this.props.namespace);
    // $(`#${this.props.namespace}`).modal('open');
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  removeNamespace() {
    this.props.deleteNamespace(this.props.namespace);
  }

  removeKey(key) {
    this.props.deleteKey(this.props.namespace, key);
  }

  props: {
    namespace: string,
    ids: string[],
    deleteKey: () => {},
    deleteNamespace: () => {},
  }


  render() {
    const modal = (
      <div id={this.props.namespace} className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Add key to {this.props.namespace}</h4>
          <Create namespace={this.props.namespace} />
        </div>
        <div className="modal-footer">
          <button
            className="btn red modal-action modal-close waves-effect waves-green"
            onClick={console.log(`${this.props.namespace}`)}
          >
          Import
          </button>
        </div>
      </div>
  );

    return (
      <li>
        <div className="right btn-delete">
          <a href="#deleteNamespace" className="right btn-margs black-link">
            <i className="material-icons" onClick={this.removeNamespace}>delete</i>
          </a>
        </div>
        <div className="right btn-delete">
          <a href="#addKeyToNamespace" className="right btn-margs black-link" onClick={this.addKey()}>
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="collapsible-header" onClick={this.toggleOpen}>
          <i className="material-icons right collapsible-border">{this.getIcon()}</i>
          {this.props.namespace}
        </div>
        <div className="collapsible-body">
          {this.props.ids.map(id => <p key={id}>
            {id}
            <a href="#deleteKey" className="right btn-margs black-link valign-wrapper" onClick={() => this.removeKey(id)} >
              <i className="material-icons valign">delete</i> Delete
            </a>
            <a href={`view/${this.props.namespace}/${id}`} className="right btn-margs black-link valign-wrapper  btn-border">
              <i className="material-icons valign">open_in_new</i> View
            </a>
          </p>)}
        </div>
        {modal}
      </li>
    );
  }
}
