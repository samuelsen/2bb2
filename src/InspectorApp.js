import React from 'react';
import { connect } from 'react-redux';

import Inspector from './components/Inspector';
import CollapsibleList from './components/CollapsibleList'

class InspectorApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Inspector/>
      </div>
    );
  }
}

export default connect()(InspectorApp);
