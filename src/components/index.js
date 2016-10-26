// src/components/index.js

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Senter tekst eer</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
