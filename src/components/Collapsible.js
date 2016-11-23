// src/components/Collapsible.js

import React, { Component } from 'react';

export default class Collapsible extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
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
  }


  render() {
    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen}>
          <i className="material-icons right">delete</i>
          <i className="material-icons right">{this.getIcon()}</i>
          {this.props.namespace}
        </div>
        <div className="collapsible-body">
          {this.props.ids.map(id => <p key={id}>{id} 
                <a className="right btn-margs btn-red"><i className="material-icons">delete</i></a>
                <a href={"view/" + this.props.namespace + "/" + id} className="right btn-margs btn-red"><i className="material-icons">open_in_new</i></a>
            </p>)}
        </div>
      </li>
    );
  }
}
