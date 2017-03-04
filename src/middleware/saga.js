import createSagaMiddleware from 'redux-saga';
import employeesSaga from './sagas/employees';
import departmentsSaga from './sagas/departments';

let saga = createSagaMiddleware();

export function registerSagas() {
  saga.run(function *() {
    yield *employeesSaga();
    yield *departmentsSaga();
  });
}

export default saga;