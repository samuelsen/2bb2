import { takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { loadData, postData, deleteData, putData } from './actions/datastoreApi';

/* DATABASE OVERVIEW:
 *
 *    ( ) -> [ NAMEPACE ]
 *    ( NAMESPACE ) -> [ KEY ]
 *    ( NAMESPACE, KEY ) -> { DATA }
 *
 */

/* FETCH_NAMESPACES:
 * Fetches all namespaces in the database */
function* fetchNamespaces() {
  try {
    const data = yield call(loadData, '');
    yield put({
      type: 'NAMESPACES_FETCHED',
      entries: data.map(namespace => ({ namespace, ids: [], visible: true })),
    });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

/* FETCH_KEYS:
 * Fetches all keys in a namespace */
function* fetchKeys(action) {
  try {
    yield delay(1000);
    const url = action.namespace;
    const data = yield call(loadData, url);
    yield put({
      type: 'KEYS_FETCHED',
      namespace: action.namespace,
      keys: data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

/* FETCH_DATA:
 * Fetches the data referenced by (namespace, key) */
function* fetchData(action) {
  try {
    yield delay(1000);
    const url = `${action.namespace}/${action.key}`;
    const data = yield call(loadData, url);
    yield put({
      type: 'DATA_FETCHED',
      namespace: action.namespace,
      key: action.key,
      data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

/* DELETE_KEYS:
 * Deletes all keys referenced by (namespace) */
function* deleteNamespace(action) {
  try {
    const url = action.namespace;
    const data = yield call(deleteData, url);
    yield put({
      type: 'NAMESPACE_DELETED',
      namespace: action.namespace,
      data,
    });
  } catch (error) {
    yield put({ type: 'DELETE_FAILED', error });
  }
}

/* DELETE_DATA:
 * Deletes the data referenced by (namespace, key) */
function* deleteKey(action) {
  try {
    const url = `${action.namespace}/${action.key}`;
    const data = yield call(deleteData, url);
    yield put({
      type: 'KEY_DELETED',
      namespace: action.namespace,
      key: action.key,
      data,
    });
  } catch (error) {
    yield put({ type: 'DELETE_FAILED', error });
  }
}

/* CREATE_DATA:
 * Stores data with (namespace, key) reference */
function* createData(action) {
  try {
    const url = `${action.namespace}/${action.key}`;
    const body = action.body;
    yield call(postData, url, body, action.inCreate);
    yield put({
      type: 'DATA_CREATED',
      namespace: action.namespace,
      key: action.key,
      data: body,
    });
  } catch (error) {
    yield put({ type: 'CREATE_FAILED', error });
  }
}

/* MODIFY_DATA:
 * Puts changes to data referenced by (namespace, key) */
function* modifyData(action) {
  try {
    const url = `${action.namespace}/${action.key}`;
    const body = action.body;
    yield call(putData, url, body);
    yield put({
      type: 'DATA_MODIFIED',
      namespace: action.namespace,
      key: action.key,
      data: body,
    });
  } catch (error) {
    yield put({ type: 'MODIFY_FAILED', error });
  }
}

/* ROOT SAGA */
export default function* rootSaga() {
  yield [
    takeEvery('FETCH_NAMESPACES', fetchNamespaces),
    takeEvery('FETCH_KEYS', fetchKeys),
    takeEvery('FETCH_DATA', fetchData),
    takeEvery('DELETE_NAMESPACE', deleteNamespace),
    takeEvery('DELETE_KEY', deleteKey),
    takeEvery('CREATE_DATA', createData),
    takeEvery('MODIFY_DATA', modifyData),
  ];
}
