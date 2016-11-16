// src/index.jsx

import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
