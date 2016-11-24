import { connect } from 'react-redux';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

function AddButton(props) {
  const { path, addElement } = props;
  return (
    <a
      className="btn-floating btn-add-margs btn-medium waves-effect waves-light red right"
      onClick={() => addElement(path)}
    >
      <i className="material-icons">add</i>
    </a>
  );
}

AddButton.propTypes = {
  path: React.PropTypes.object,
  addElement: React.PropTypes.func.isRequired,
};

export default connect(null, InspectorActions)(AddButton);
