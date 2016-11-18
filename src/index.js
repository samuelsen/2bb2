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

// TEST DATA (UNCOMMENT yield delay(1000); IN SAGAS.JS)
store.dispatch({ type: 'FETCH_NAMESPACES' });
store.dispatch({ type: 'FETCH_KEYS', namespace: 'METADATASTORE' });
store.dispatch({ type: 'FETCH_KEYS', namespace: 'social-media-video' });
store.dispatch({ type: 'FETCH_KEYS', namespace: 'newspace' });
// store.dispatch({type: 'FETCH_KEYS', namespace: "LOLZ"});
// store.dispatch({type: 'FETCH_DATA', namespace: "METADATASTORE", key: "Version_1"});
// store.dispatch({type: 'FETCH_DATA', namespace: "social-media-video", key: "hjcF14oVjo4"});
// store.dispatch({type: 'FETCH_DATA', namespace: "METADATASTORE", key: "Version_Y"});
// store.dispatch({type: 'DELETE_KEY', namespace: "LOLZ", key:"Version_X"});
// store.dispatch({type: 'DELETE_NAMESPACE', namespace: "LOLZ"});

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/test" component={Test} />
      <Route path="/viewData/:namespace/:key" component={Test} />
      <Route path="/create" component={Create} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
