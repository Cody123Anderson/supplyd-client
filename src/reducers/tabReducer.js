import { UPDATE_TAB, CLEAR_TAB } from '../actions/types';
import constants from '../constants';

const initialState = {
  active: constants.upperDashboardLinks.employees.name
};

export default function (state = initialState, action) {
  switch(action.type) {
    case CLEAR_TAB:
      return initialState;
    case UPDATE_TAB:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
