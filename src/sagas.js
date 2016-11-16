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
    const namespaces = yield call(loadData, "");
    const entries = [];
    for (var i = 0; i < namespaces.length; i++) {
      entries.push({
        namespace: namespaces[i],
        ids: yield call(loadData, namespaces[i])
      });
    }
    yield put({
      type: "NAMESPACES_FETCHED",
      entries: entries
    });
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  }
  console.log("INSIDE FETCH_NAMESPACES");
}

/* FETCH_KEYS:
 * Fetches all keys in a namespace */
function* fetchKeys(action) {
  yield delay(2000);
  console.log(action);
  yield put({type: "KEYS_FETCHED", namespace: action.namespace, keys: ["hehe", "hoho"]});
  console.log("INSIDE FETCH_KEYS");
  /* TODO */
}

/* FETCH_DATA:
 * Fetches the data referenced by (namespace, key) */
function* fetchData() {
  console.log("INSIDE FETCH_DATA");
  /* TODO */
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
