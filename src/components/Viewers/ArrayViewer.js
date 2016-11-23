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
      <ul className="collapsible" data-collapsible="expandable" style={{ marginBottom: 50 }}>
        {values.map(v =>
          <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
        )}
        <AddButton path={path} />
      </ul>
    </div>
  );
}

ArrayViewer.propTypes = {
  path: React.PropTypes.object,
  target: React.PropTypes.object,
};

export default connect(null, InspectorActions)(ArrayViewer);
