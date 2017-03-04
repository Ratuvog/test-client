import { createSagas } from '../../factories/sagasFactory';
import actionCreators from '../../actions/employees';

const sagas = createSagas('employees', actionCreators);
export default sagas;


// import { call, put, takeEvery } from 'redux-saga/effects';
// import { loadAsync } from './async';
// import {
//   LOAD_EMPLOYEES,
//   LOAD_ONE_EMPLOYEE,
//   REMOVE_EMPLOYEE,
//   UPSERT_EMPLOYEE,
//   setEmployees,
//   setEmployee,
//   employeeRemoved
// } from '../../actions/employees';
//
// function *remove (action) {
//   yield loadAsync(function *() {
//     yield call(fetch, `api/employees/${action.id}`, { method: 'DELETE' });
//     yield put(employeeRemoved(action.id))
//   })
// }
//
// function* load() {
//   yield loadAsync(function *() {
//     const response = yield call(fetch, '/api/employees');
//     const jresponse = yield call(() => response.json());
//     yield put(setEmployees(jresponse.data));
//   })
// }
//
// function* loadOne(action) {
//   yield loadAsync(function *() {
//     const response = yield call(fetch, `/api/employees/${action.id}`);
//     const jresponse = yield call(() => response.json());
//     yield put(setEmployee(jresponse.data));
//   })
// }
//
// function* upsert(action) {
//   yield loadAsync(function *() {
//     let method = action.employee.id ? 'PUT' : 'POST';
//     let path = [`/api/employees`, action.employee.id].join('/');
//     let body = JSON.stringify(action.employee);
//     let headers = { 'Content-Type': 'application/json;charset=UTF-8' };
//     const response = yield call(fetch, path, { method, body, headers });
//     const jresponse = yield call(() => response.json());
//     yield put(setEmployee(jresponse.data));
//   })
// }
//
// function* employeesSaga () {
//   yield takeEvery(LOAD_EMPLOYEES, load);
//   yield takeEvery(LOAD_ONE_EMPLOYEE, loadOne);
//   yield takeEvery(REMOVE_EMPLOYEE, remove);
//   yield takeEvery(UPSERT_EMPLOYEE, upsert);
// }
//
// export default employeesSaga;
