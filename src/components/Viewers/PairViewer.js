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
  }

  state: {
    open: boolean,
  }

  componentDidMount() {
    $('.stop-propagation').on('click', e => e.stopPropagation());
  }

  getIcon() {
    return (
      this.state.open
      ? 'trending_down'
      : 'trending_flat'
    );
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  props: {
    path: React.PropTypes.object,
    name: React.PropTypes.string,
    value: 'defaultString',
    updateName: React.PropTypes.func.isRequired,
  }

  render() {
    const { path, name, value, updateName } = this.props;
    let nameElement = name;
    if (typeof name === 'string') {
      nameElement = (
        <div>
          <label>Name:</label>
          <div className="input-field" style={{ display: 'inline-block', paddingLeft: 5 }}>
            <input
              className="stop-propagation"
              defaultValue={name}
              onBlur={event => updateName(path, event.target.value)}
              type="text"
            />
          </div>
        </div>
      );
    }

    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleOpen}>
          <i className="material-icons">{this.getIcon()}</i>
          <div style={{ display: 'inline-block' }}>
            <label>Type:</label>
            <div className="stop-propagation" style={{ display: 'inline-block', paddingLeft: 5 }}>
              <TypePicker path={path} type={getType(value)} />
            </div>
          </div>
          {nameElement}
        </div>
        <div className="collapsible-body" style={{ paddingLeft: 10 }}>
          <label>Value:</label>
          <JSONViewer path={path} target={value} />
        </div>
      </li>
    );
  }
}

export default connect(null, InspectorActions)(PairViewer);
