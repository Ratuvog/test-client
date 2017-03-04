import { call, put, takeEvery } from 'redux-saga/effects';
import { loadAsync } from '../middleware/sagas/async';
import {
  FETCH_ALL,
  FETCH_BY_ID,
  PLACE_ALL,
  PLACE_ONE,
  REMOVE,
  ON_REMOVED,
  UPSERT,
  actionName
} from '../constants/actionConstants';

export function createSagas(entity, actionCreators, opts = { sagas: function *() {}}) {

  function *remove (action) {
    yield loadAsync(function *() {
      const response = yield call(fetch, `api/${entity}/${action.payload}`, { method: 'DELETE' });
      yield put(actionCreators[ON_REMOVED](action.payload))
    })
  }

  function* load() {
    yield loadAsync(function *() {
      const response = yield call(fetch, `/api/${entity}`);
      const jresponse = yield call(() => response.json());
      yield put(actionCreators[PLACE_ALL](jresponse.data));
    })
  }

  function* loadOne(action) {
    yield loadAsync(function *() {
      const response = yield call(fetch, `/api/${entity}/${action.payload}`);
      const jresponse = yield call(() => response.json());
      yield put(actionCreators[PLACE_ONE](jresponse.data));
    })
  }

  function* upsert(action) {
    yield loadAsync(function *() {

      let method = action.payload.id ? 'PUT' : 'POST';
      let path = [`/api/${entity}`, action.payload.id].join('/');
      let body = JSON.stringify(action.payload);
      let headers = { 'Content-Type': 'application/json;charset=UTF-8' };

      const response = yield call(fetch, path, { method, body, headers });
      const jresponse = yield call(() => response.json());
      yield put(actionCreators[PLACE_ONE](jresponse.data));
    })
  }

  return function* saga() {
    yield takeEvery(actionName(entity, FETCH_ALL), load);
    yield takeEvery(actionName(entity, FETCH_BY_ID), loadOne);
    yield takeEvery(actionName(entity, REMOVE), remove);
    yield takeEvery(actionName(entity, UPSERT), upsert);
    yield *opts.sagas();
  }
}