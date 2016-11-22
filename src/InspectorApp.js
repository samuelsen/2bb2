import React from 'react';
import { connect } from 'react-redux';

import Inspector from './components/Inspector';

function InspectorApp() {
  return (
    <div>
      <Inspector />
    </div>
  );
}

export default connect()(InspectorApp);
