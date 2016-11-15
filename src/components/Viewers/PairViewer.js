
import React, { Component, TextInput } from 'react';
import { connect } from 'react-redux';

import JSONViewer from './JSONViewer'

import * as InspectorActions from './../../actions/Inspector';

class PairViewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  props: {
    path: object,
    name: string,
    value: "defaultString",
    updateName: React.PropTypes.func.isRequired,
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
    const { path, name, value, updateName } = this.props;

    var nameElement = name;
    if(typeof name == "string")
      nameElement = <input value={name} onChange={event => updateName(path, event.target.value)} type="text"/>; 

    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen.bind(this)}>
            <i className="material-icons">{this.getIcon()}</i>
            {nameElement}
        </div>
        <div className="collapsible-body">
            <JSONViewer path={path} target={value} />
        </div>
      </li>
    );
  }
}

export default connect(null, InspectorActions)(PairViewer);