// src/index.jsx

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import App from './App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
