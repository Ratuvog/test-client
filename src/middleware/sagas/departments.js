import { createSagas } from '../../factories/sagasFactory';
import actionCreators from '../../actions/departments';

const sagas = createSagas('departments', actionCreators);
export default sagas;

// import { call, put, takeEvery } from 'redux-saga/effects';
// import { loadAsync } from './async';
// import {
//   LOAD_DEPARTMENTS,
//   LOAD_ONE_DEPARTMENT,
//   REMOVE_DEPARTMENT,
//   UPSERT_DEPARTMENT,
//   setDepartments,
//   setDepartment,
//   departmentRemoved
// } from '../../actions/departments';
//
// function *remove (action) {
//   yield loadAsync(function *() {
//     yield call(fetch, `api/departments/${action.id}`, { method: 'DELETE' });
//     yield put(departmentRemoved(action.id))
//   })
// }
//
// function* load() {
//   yield loadAsync(function *() {
//     const response = yield call(fetch, '/api/departments');
//     const jresponse = yield call(() => response.json());
//     yield put(setDepartments(jresponse.data));
//   })
// }
//
// function* loadOne(action) {
//   yield loadAsync(function *() {
//     const response = yield call(fetch, `/api/departments/${action.id}`);
//     const jresponse = yield call(() => response.json());
//     yield put(setDepartment(jresponse.data));
//   })
// }
//
// function* upsert(action) {
//   yield loadAsync(function *() {
//     let method = action.department.id ? 'PUT' : 'POST';
//     let path = [`/api/departments`, action.department.id].join('/');
//     let body = JSON.stringify(action.department);
//     let headers = { 'Content-Type': 'application/json;charset=UTF-8' };
//     const response = yield call(fetch, path, { method, body, headers });
//     const jresponse = yield call(() => response.json());
//     yield put(setDepartment(jresponse.data));
//   })
// }
//
// function* departmentSaga () {
//   yield takeEvery(LOAD_DEPARTMENTS, load);
//   yield takeEvery(LOAD_ONE_DEPARTMENT, loadOne);
//   yield takeEvery(REMOVE_DEPARTMENT, remove);
//   yield takeEvery(UPSERT_DEPARTMENT, upsert);
// }
//
// export default departmentSaga;
