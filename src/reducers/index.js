import { combineReducers } from 'redux';

import tabReducer from './tabReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  tab: tabReducer,
  user: userReducer
});

export default rootReducer;
