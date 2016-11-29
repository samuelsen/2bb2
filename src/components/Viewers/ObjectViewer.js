import { connect } from 'react-redux';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

import PairViewer from './PairViewer';
import AddButton from './AddButton';

function ObjectViewer(props) {
  const { path, target } = props;
  const values = target.keySeq().toArray();
  let content = <label>Empty Object</label>;
  if (target.size > 0) {
    content = values.map(v =>
      <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
    );
  }
  return (
    <div>
      <ul className="collapsible expandable-padding-bottom" data-collapsible="expandable">
        {content}
        <li><AddButton path={path} /></li>
      </ul>
    </div>
  );
}

ObjectViewer.propTypes = {
  path: React.PropTypes.object,
  target: React.PropTypes.object,
};

export default connect(null, InspectorActions)(ObjectViewer);
