import axios from 'axios';

import { API_URL } from '../constants/env';
import { SET_BUSINESS_INFO, SET_STRIPE_INFO } from "./types";
import { getToken } from '../utils/jwtUtils';

export function createBusiness(businessName) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const data = { name: businessName };
            const url = `${API_URL}/businesses`;
            axios.post(url, data)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    console.error('error registering business: ', err.response);
                    // businessName already exists
                    // Need to handle other cases still!!!
                    reject(err);
                });
        });
    };
}

export function createStripeCustomer(cardInfo, user) {
    return (dispatch) => {
        const options = { headers: { Authorization: getToken() } };
        const url = `${API_URL}/businesses/stripe/create/${user.businessId}`;
        const data = { card: { cardInfo }, email: user.email }

        axios.put(url, data, options)
        .then((response) => {
            dispatch(setStripeInfo({cards: [cardInfo], stripeId: response.data}));
        })
        .catch((err) => {
            console.error('error creating stripe customer: ', err.response);
        });
        console.log('SUCCESS', data)
    };
}

export function checkBusinessName(businessName) {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/businesses/name/${businessName}`)
            .then((response) => {
                resolve(response.data.isUnique);
            })
            .catch((err) => {
                console.error('error checking business name: ', err.response);
                reject(err);
            });
    });
}

export function getBusiness(id) {
    return (dispatch) => {
        return axios.get(`${API_URL}/businesses/${id}`)
            .then(response => dispatch(setBusiness(response.data)))
            .catch(err => console.error(err));
    }
}

export function setStripeInfo(data) {
    return {
        type: SET_STRIPE_INFO,
        payload: data
    };
}

function setBusiness(business) {
    return {
        type: SET_BUSINESS_INFO,
        payload: business
    };
}
