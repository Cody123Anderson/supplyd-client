import axios from 'axios';

import { API_URL } from '../constants/env';

import { SET_BUSINESS_INFO, BUSINESS_ERROR, SET_SAVED_CARDS } from "./types";
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

        return axios.put(url, data, options)
        .then((response) => {
            console.log('CREATESTRIPE: ', response)
            dispatch(setSavedCards({
                cards: [cardInfo.card],
                stripeId: response.data.business.stripeId
            }));
        })
        .catch((err) => {
            console.error('error creating stripe customer: ', err.response);
        });
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

export function deleteCreditCard(stripeId, cardId) {
    return (dispatch) => {
        const url = `${API_URL}/businesses/stripe/card/delete`;
        const data = { customerId: stripeId, cardId  }

        return axios.delete(url, data)
        .then((response) => {
            console.log('deletecreditcard: ', response)
            dispatch(setSavedCards({
                cards: [],
                stripeId: response.data.id
            }));
        })
        .catch((err) => {
            console.error('error updating stripe customer: ', err.response);
        });
    };
}

export function getBusiness(id) {
    return (dispatch) => {
        return axios.get(`${API_URL}/businesses/${id}`)
            .then(response => {
                console.log('get business: ', response)
                dispatch(setBusiness(response.data.business));
                if (response.data.stripeInfo.sources) {
                    dispatch(setSavedCards({
                        cards: response.data.stripeInfo.sources.data,
                        stripeId: response.data.stripeInfo.id
                    }));
                }

            }).catch(err => console.error(err));
    }
}

export function updateBusiness(body, id) {
    return (dispatch) => {
        const options = { headers: { Authorization: getToken() } };

        axios.put(`${API_URL}/businesses/${id}`, body, options)
            .then((response) => {
                const { business } = response.data;

                // Update user in Redux state
                dispatch({ type: SET_BUSINESS_INFO, payload: business });
            })
            .catch((err) => {
                console.error('error updating the business: ', err.response);
                dispatch({ type: BUSINESS_ERROR });
            });
    };
}

export function updateCreditCard(cardInfo, user) {
    return (dispatch) => {
        const url = `${API_URL}/businesses/stripe/card/update`;
        const data = { card: { cardInfo }, customerId: user.stripeId }

        return axios.post(url, data)
        .then((response) => {
            console.log('udpatestripe: ', response)
            dispatch(setSavedCards({
                cards: response.data.sources.data,
                stripeId: response.data.id
            }));
        })
        .catch((err) => {
            console.error('error updating stripe customer: ', err.response);
        });
    };
}

export function setSavedCards(data) {
    return {
        type: SET_SAVED_CARDS,
        payload: data
    }
}

function setBusiness(business) {
    return {
        type: SET_BUSINESS_INFO,
        payload: business
    };
}
