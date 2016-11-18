
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

  modalComplete() {
    console.log(this.props.path);
  }

  render() {
    const { path, name, value, updateName } = this.props;

    var nameElement = name;
    if(typeof name == "string")
      nameElement = <input 
        defaultValue={name} 
        onBlur={event => updateName(path, event.target.value)}
        onClick={event => event.stopPropogation()}
        type="text"
      />; 

    return (
      <li>

        <div id="addModal" className="modal">
          <div className="modal-content">
              <p>test</p>
          </div>
          <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>  

        <div className="collapsible-header" onClick={this.toggleOpen.bind(this)}>
            <i className="material-icons">{this.getIcon()}</i>
            {nameElement}
        </div>
        <div className="collapsible-body" style={{paddingLeft: 10}}>
            <JSONViewer path={path} target={value} />
        </div>
      </li>
    );
  }
}

export default connect(null, InspectorActions)(PairViewer);1