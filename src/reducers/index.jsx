import {combineReducers} from 'redux';
import location from './location';
import employees from './employees';
import departments from './departments';
import ui from './ui';

const rootReducer = combineReducers({
  ui,
  location,
  employees,
  departments
});

export default rootReducer;
