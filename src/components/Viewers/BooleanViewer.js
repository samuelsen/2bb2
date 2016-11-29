import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as InspectorActions from './../../actions/inspectorActions';

class BooleanViewer extends Component {
  constructor(props) {
    super(props);
    this.updateChecker = this.updateChecker.bind(this);
  }

  props: {
    path: React.PropTypes.object,
    value: React.PropTypes.bool,
    updateElement: React.PropTypes.func.isRequired,
  }

  updateChecker() {
    this.props.updateElement(this.props.path, !this.props.value);
  }

  render() {
    return (
      <div>
        <div className="switch extra-padding">
          <label>
            <input type="checkbox" onChange={this.updateChecker} checked={this.props.value} />
            <span className="lever" />
            {this.props.value ? 'True' : 'False'}
          </label>
        </div>
      </div>
    );
  }
}

export default connect(null, InspectorActions)(BooleanViewer);
