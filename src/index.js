// src/index.jsx

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import Create from './components/Create';
import Test from './components/Test';
import Inspector from './components/Inspector';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/test" component={Test} />
      <Route path="/view/:namespace/:key" component={Inspector} />
      <Route path="/create" component={Create} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
