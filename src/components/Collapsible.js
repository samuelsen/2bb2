// src/components/Collapsible.js

import React, { Component } from 'react';

export default class Collapsible extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  props: {
    namespace: string,
    ids: string[],
  }

  state: {
    open: boolean,
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  getIcon() {
    return (
      this.state.open
      ? "trending_down"
      : "trending_flat"
    );
  }

  render() {
    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen.bind(this)}>
          <i className="material-icons">{this.getIcon()}</i>
          {this.props.namespace}
        </div>
        <div className="collapsible-body">
          {this.props.ids.map(id => <p key={id}>{id}</p>)}
        </div>
      </li>
    );
  }
}
