import {
    SET_BUSINESS_INFO,
    BUSINESS_ERROR
} from '../actions/types';

const initialState = {
    id: '',
    name: '',
    newHiresPerMonth: '',
    numEmployees: '',
    status: '',
    stripeId: '',
    websiteUrl: '',
    error: false,
    errorCount: 0
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_BUSINESS_INFO:
            return { ...state, ...action.payload, error: false };
        case BUSINESS_ERROR:
            return { ...state, errorCount: state.errorCount + 1, error: true }
        default:
            return state;
    }
}
