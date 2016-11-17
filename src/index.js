// src/index.jsx

import React, { component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App';
import Test from './components/Test';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

store.dispatch({type: 'FETCH_NAMESPACES'});
store.dispatch({type: 'FETCH_KEYS', namespace: "METADATASTORE"});
store.dispatch({type: 'FETCH_KEYS', namespace: "social-media-video"});
store.dispatch({type: 'FETCH_KEYS', namespace: "LOLZ"});

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