import React from 'react';
import { connect } from 'react-redux';

import CollapsibleList from './components/CollapsibleList';
import { loadData } from './actions/getDHISdata';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CollapsibleList />
      </div>
    );
  }
}

export default connect()(App);