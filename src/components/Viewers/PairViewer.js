
import React, { Component, TextInput } from 'react';
import { connect } from 'react-redux';

import JSONViewer from './JSONViewer'

import * as InspectorActions from './../../actions/Inspector';
import TypePicker, { getType } from './TypePicker';

var $ = require('jquery');

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
    updateElement: React.PropTypes.func.isRequired,
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

  componentDidMount(){
    $('.stop-propagation').on('click', function(e){
        e.stopPropagation();
    });
  }

  render() {
    const { path, name, value, updateName } = this.props;

    var nameElement = name;
    if(typeof name == "string")
      nameElement = 
      <div>
        <label>Name:</label>
        <div style={{display: "inline-block", paddingLeft: 5}}>
          <input 
            className="stop-propagation"
            defaultValue={name} 
            onBlur={event => updateName(path, event.target.value)}
            type="text"
          />
        </div>
      </div>; 

    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen.bind(this)}>
            <i className="material-icons">{this.getIcon()}</i>
            <div style={{display: "inline-block"}}>
              <label>Type:</label>
              <div className="stop-propagation" style={{display: "inline-block", paddingLeft: 5}}>
                <TypePicker path={path} type={getType(value)} />
              </div>
            </div>
            {nameElement}
        </div>
        <div className="collapsible-body" style={{paddingLeft: 10}}>
            <label>Value:</label>
              <JSONViewer path={path} target={value} />
        </div>
      </li>
    );
  }
}

export default connect(null, InspectorActions)(PairViewer);1