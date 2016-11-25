import { connect } from 'react-redux';
import React from 'react';

import * as InspectorActions from './../../actions/inspectorActions';

function BooleanViewer(props) {
  const { path, value, updateElement } = props;

  var opts = {};
  if (value) {
      opts['checked'] = 'checked';
  }

  return (
    <div>
      <div className="switch">
        <label>
          <input type="checkbox" onChange={(event) => updateElement(path, !value)} {...opts}/>
          <span className="lever"></span>
          {value ? 'True' : 'False'}
        </label>
      </div>
    </div>
  );
}

BooleanViewer.propTypes = {
  path: React.PropTypes.object,
  value: React.PropTypes.bool,
  updateElement: React.PropTypes.func.isRequired,
};

export default connect(null, InspectorActions)(BooleanViewer);