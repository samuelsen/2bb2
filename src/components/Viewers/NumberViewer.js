import { connect } from 'react-redux';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

function NumberViewer(props) {
  const { path, number, updateElement } = props;
  return (
    <div className="input-field">
      <input type="number" pattern="[0-9]*" inputMode="numeric" value={number} onChange={event => updateElement(path, Number(event.target.value))} />
    </div>
  );
}

NumberViewer.propTypes = {
  path: React.PropTypes.object,
  number: React.PropTypes.number,
  updateElement: React.PropTypes.func.isRequired,
};

export default connect(null, InspectorActions)(NumberViewer);
