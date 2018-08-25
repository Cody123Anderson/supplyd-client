import {
    CLEAR_BUSINESS,
    SET_BUSINESS_INFO,
    BUSINESS_ERROR,
    SET_SAVED_CARDS
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
    errorCount: 0,
    cards: [],
};

export default function (state = initialState, action) {
    switch(action.type) {
        case CLEAR_BUSINESS:
            return initialState;
        case SET_BUSINESS_INFO:
            return { ...state, ...action.payload, error: false };
        case BUSINESS_ERROR:
            return { ...state, errorCount: state.errorCount + 1, error: true }
        case SET_SAVED_CARDS:
            return { ...state, cards: action.payload.cards, stripeId: action.payload.stripeId };
        default:
            return state;
    }
}
