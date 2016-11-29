import React, { Component } from 'react';
import { connect } from 'react-redux';

import JSONViewer from './JSONViewer';

import * as InspectorActions from './../../actions/inspectorActions';
import TypePicker, { getType } from './TypePicker';

const $ = require('jquery');

class PairViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    document.collapsibleNeedsInit = true;
  }


  state: {
    open: boolean,
  }

  componentDidMount() {
    $('.stop-propagation').on('click', e => e.stopPropagation());
  }

  getIcon() {
    return (
      this.state.open ? 'visibility_off' : 'visibility'
    );
  }

  props: {
    path: React.PropTypes.object,
    name: React.PropTypes.string,
    value: 'defaultString',
    updateName: React.PropTypes.func.isRequired,
    delElement: React.PropTypes.func.isRequired,
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { path, name, value, updateName, delElement } = this.props;
    let nameElement = name;
    if (typeof name === 'string') {
      nameElement = (
        <div>
          <label className="type-padding">Name:</label>
          <div className="input-field" style={{ display: 'inline-block', width: '250px' }}>
            <input
              className="stop-propagation "
              defaultValue={name}
              onBlur={event => updateName(path, event.target.value)}
              type="text"
            />
          </div>
        </div>
      );
    } else if (typeof name === 'number') {
      nameElement = `index: ${name}`;
    }

    let viewer = null;
    if (this.state.open) {
      viewer = <JSONViewer path={path} target={value} />;
    }

    return (
      <li>
        <div className="collapsible-header extra-padding" onClick={this.toggleOpen}>
          <i className="material-icons">{this.getIcon()}</i>
          <div>
            <span className="col s6">{nameElement}</span>
            <div className="stop-propagation btn-margin" style={{ display: 'inline-block' }}>
              <label className="type-padding label col s2">Type:</label>
              <TypePicker path={path} type={getType(value)} />
            </div>
            <i className="material-icons right" onClick={() => delElement(path)}>delete</i>
          </div>
        </div>
        <div className="collapsible-body level-down">
          <div className="value-padding">
            <label>Value:</label>
          </div>
          {viewer}
        </div>
      </li>
    );
  }
}

export default connect(null, InspectorActions)(PairViewer);
