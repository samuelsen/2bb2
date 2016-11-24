// src/components/Collapsible.js

import React, { Component } from 'react';

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
    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen}>
          <a href="#deleteNamespace" className="right btn-margs black-link">
            {/* TODO: Make B-E-A-UTIFAL */}
            <i className="material-icons" onClick={this.removeNamespace}>delete</i>
          </a>
          <i className="material-icons right">{this.getIcon()}</i>
          {this.props.namespace}
        </div>
        <div className="collapsible-body">
          {this.props.ids.map(id => <p key={id}>
            {id}
            <a href="#deleteKey" className="right btn-margs black-link" onClick={() => this.removeKey(id)} >
              <i className="material-icons">delete</i>
            </a>
            <a href={`view/${this.props.namespace}/${id}`} className="right btn-margs black-link">
              <i className="material-icons">open_in_new</i>
            </a>
          </p>)}
        </div>
      </li>
    );
  }
}
