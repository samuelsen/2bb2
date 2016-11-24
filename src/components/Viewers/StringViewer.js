import { connect } from 'react-redux';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

function StringViewer(props) {
  const { path, text, updateElement } = props;
  return (
    <div className="input-field">
      <input
        value={text}
        onChange={event => updateElement(path, event.target.value)}
        type="text"

      />
    </div>
  );
}

StringViewer.propTypes = {
  path: React.PropTypes.object,
  text: React.PropTypes.string,
  updateElement: React.PropTypes.func.isRequired,
};

export default connect(null, InspectorActions)(StringViewer);
