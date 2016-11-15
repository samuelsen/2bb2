// src/index.jsx

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import InspectorApp from './InspectorApp';
import App from './App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <InspectorApp />
  </Provider>,
  document.getElementById('app')
);
