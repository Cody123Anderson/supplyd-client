import { SET_BUSINESS_INFO, SET_STRIPE_INFO } from '../actions/types';

const initialState = {
  id: null,
  name: null,
  status: null,
  stripeId: null,
  cards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BUSINESS_INFO:
    console.log('reducer: ', action.payload)
      return { ...state, ...action.payload };
    case SET_STRIPE_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
