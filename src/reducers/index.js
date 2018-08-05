import { combineReducers } from 'redux';

import employeeReducer from './employeeReducer';
import tabReducer from './tabReducer';
import userReducer from './userReducer';
import businessReducer from './businessReducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
  tab: tabReducer,
  user: userReducer,
  business: businessReducer
});

export default rootReducer;
