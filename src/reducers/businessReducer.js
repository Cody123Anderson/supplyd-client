import {
    SET_BUSINESS_INFO
} from '../actions/types';

const initialState = {
    id: null,
    name: null,
    status: null,
    stripeId: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_BUSINESS_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
