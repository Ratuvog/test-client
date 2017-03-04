import DepartmentsPage from '../pages/departments/DepartmentsPage';
import Edit from '../pages/departments/Edit';
import departmentActions from '../actions/departments';
import {changePageTitle} from '../actions/ui';
import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionConstants';

export default (store) => {
  return [
    {
      path: 'departments',
      component: DepartmentsPage,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('Departments'));
        store.dispatch(departmentActions[FETCH_ALL]());
        callback();
      }
    },
    {
      path: 'departments/new',
      component: Edit,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('New department'));
        callback();
      }
    },
    {
      path: 'departments/:id/edit',
      component: Edit,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(changePageTitle('Edit department'));
        store.dispatch(departmentActions[FETCH_BY_ID](nextState.params.id));
        callback();
      }
    }
  ];
};