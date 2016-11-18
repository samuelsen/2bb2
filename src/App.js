import React from 'react';
import { connect } from 'react-redux';

import CollapsibleList from './components/CollapsibleList';

function App() {
  return (
    <div>
      <CollapsibleList />
    </div>
  );
}

export default connect()(App);
