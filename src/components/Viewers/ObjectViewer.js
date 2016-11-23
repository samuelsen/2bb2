import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';

import PairViewer from './PairViewer';
import AddButton from './AddButton';

class ObjectViewer extends Component {
  props: {
    path: React.proptypes.object,
    target: React.proptypes.object,
  }

  render() {
    const { path, target } = this.props;

    const values = target.keySeq().toArray().sort((a, b) => {
      if (a === '') {
        return 1;
      } else if (b === '') {
        return -1;
      }
      return a > b;
    });

    let content = <label>Empty Object</label>;
    if (target.size > 0) {
      content = values.map(v =>
        <PairViewer path={path.push(v)} key={v} name={v} value={target.get(v)} />
      );
    }

    return (
      <div>
        <ul className="collapsible" data-collapsible="expandable" style={{ marginBottom: 50 }}>
          {content}
          <AddButton path={path} />
        </ul>
      </div>
    );
  }
}

export default connect(null, InspectorActions)(ObjectViewer);
