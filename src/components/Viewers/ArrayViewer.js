import { connect } from 'react-redux';
import React from 'react';
import * as InspectorActions from './../../actions/inspectorActions';

import PairViewer from './PairViewer';
import AddButton from './AddButton';

function ArrayViewer(props) {
  const { path, target } = props;
  const values = target.keySeq().toArray();
  return (
    <div>
      <ul className="collapsible expandable-padding-bottom" data-collapsible="expandable">
        {values.map(v =>
          <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
        )}
        <li>
          <AddButton path={path} />
        </li>
      </ul>
    </div>
  );
}

ArrayViewer.propTypes = {
  path: React.PropTypes.object,
  target: React.PropTypes.object,
};

export default connect(null, InspectorActions)(ArrayViewer);
