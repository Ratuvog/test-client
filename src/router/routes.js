import App from '../containers/App';
import employeeRoutes from './employees';
import departmentRoutes from './departments';

export default (store) => {
  return {
    path: "/",
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/employees') },
    childRoutes: [
      ...employeeRoutes(store),
      ...departmentRoutes(store)
    ]
  };
};
