import {
  CLEAR_EMPLOYEE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE
} from '../actions/types';

const initialState = {
  all: null,
  current: {}
};

export default function (state = initialState, action) {
  switch(action.type) {
    case CLEAR_EMPLOYEE:
      return initialState;
    case CREATE_EMPLOYEE:
      return { ...state, current: action.payload, all: [...state.all, action.payload] };
    case GET_EMPLOYEE:
      return { ...state, current: action.payload };
    case GET_EMPLOYEES:
      return { ...state, all: action.payload };
    case UPDATE_EMPLOYEE:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
