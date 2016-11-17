import { takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { loadData } from './actions/getDHISdata';

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
    const data = yield call(loadData, "");
    yield put({
      type: "NAMESPACES_FETCHED",
      entries: data.map( namespace => {
        return { namespace, ids: [] }
      })
    });
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  }
}

/* FETCH_KEYS:
 * Fetches all keys in a namespace */
function* fetchKeys(action) {
    yield delay(1000);
  try {
    const data = yield call(loadData, action.namespace);
    yield put({
      type: "KEYS_FETCHED",
      namespace: action.namespace,
      keys: data
    });
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  }
}

/* FETCH_DATA:
 * Fetches the data referenced by (namespace, key) */
function* fetchData(action) {
  try {
    let url = action.namespace + "/" + action.key;
    const data = yield call(loadData, url);
    yield put({
      type: "DATA_FETCHED",
      namespace: action.namespace,
      key: action.key,
      data: data
    });
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  }
}

/* DELETE_DATA:
 * Deletes the data referenced by (namespace, key) */
function* deleteData() {
  console.log("INSIDE DELETE_DATA");
  /* TODO */
}

/* CREATE_DATA:
 * Stores data with (namespace, key) reference */
function* createData() {
  console.log("INSIDE CREATE_DATA");
  /* TODO */
}

/* MODIFY_DATA:
 * Puts changes to data referenced by (namespace, key) */
function* modifyData() {
  console.log("INSIDE MODIFY_DATA");
  /* TODO */
}

/* ROOT SAGA */
export default function* rootSaga() {
  yield [
    takeEvery('FETCH_NAMESPACES', fetchNamespaces),
    takeEvery('FETCH_KEYS', fetchKeys),
    takeEvery('FETCH_DATA', fetchData),
    takeEvery('DELETE_DATA', deleteData),
    takeEvery('CREATE_DATA', createData),
    takeEvery('MODIFY_DATA', modifyData)
  ];
}
