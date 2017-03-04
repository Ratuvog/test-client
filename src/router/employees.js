import EmployeesPage from '../pages/employees/EmployeesPage';
import Edit from '../pages/employees/Edit';
import employeeActions from '../actions/employees';
import departmentActions from '../actions/departments';
import {changePageTitle} from '../actions/ui';
import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionConstants';

export default (store) => {
  return [
    {
      path: 'employees',
      component: EmployeesPage,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('Employees'));
        store.dispatch(employeeActions[FETCH_ALL]());
        store.dispatch(departmentActions[FETCH_ALL]());
        callback();
      }
    },
    {
      path: 'employees/new',
      component: Edit,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('New employee'));
        store.dispatch(departmentActions[FETCH_ALL]());
        callback();
      }
    },
    {
      path: 'employees/:id/edit',
      component: Edit,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('Edit employee'));
        store.dispatch(employeeActions[FETCH_BY_ID](nextState.params.id));
        store.dispatch(departmentActions[FETCH_ALL]());
        callback();
      }
    }
  ];
};