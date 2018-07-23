import { combineReducers } from 'redux';

import employeeReducer from './employeeReducer';
import tabReducer from './tabReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
  tab: tabReducer,
  user: userReducer
});

export default rootReducer;
