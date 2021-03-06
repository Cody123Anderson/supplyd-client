import {
  AUTH_ERROR,
  AUTH_USER,
  GET_USER,
  UNAUTH_USER,
  UPDATE_USER
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  token: '',
  authError: '',
  authErrorCount: 0,
  id: '',
  businessId: '',
  businessName: '',
  email: '',
  firstName: '',
  lastName: '',
  role: '',
  status: '',
  createdAt: '',
  updatedAt: '',
};

export default function (state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, isLoggedIn: true, token: action.payload };
    case UNAUTH_USER:
      return initialState;
    case AUTH_ERROR:
      return { ...state, authError: action.payload, authErrorCount: state.authErrorCount + 1 };
    case GET_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
