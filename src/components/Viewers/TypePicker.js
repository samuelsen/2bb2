import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

function TypePicker(props) {
  const { path, type, setType } = props;
  return (
    <div className="input-field right col s10">
      <select id="sel" defaultValue={type} onChange={event => setType(path, event.target.value)}>
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="object">object</option>
        <option value="array">array</option>
        <option value="boolean">boolean</option>
      </select>
    </div>
  );
}

TypePicker.propTypes = {
  path: React.PropTypes.object,
  type: React.PropTypes.string,
  setType: React.PropTypes.func.isRequired,
};

export default connect(null, InspectorActions)(TypePicker);

export function getType(target) {
  if (target == null) {
    return 'null';
  }

  if (Map.isMap(target)) {
    return 'object';
  }

  if (List.isList(target)) {
    return 'array';
  }

  return typeof target;
}
