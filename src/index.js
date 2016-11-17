// src/index.jsx
/*import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


*/
// src/index.jsx

import React, { component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App';
import Test from './components/Test';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path="/" component={App}></Route>
            <Route path="/test" component={Test}></Route>
            <Route path="/:namespace/:key" component={Test}></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)