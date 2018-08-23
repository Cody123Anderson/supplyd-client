import axios from 'axios';

import { API_URL } from '../constants/env';
import { SET_BUSINESS_INFO, BUSINESS_ERROR } from "./types";
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
            .then(response => {
                dispatch(setBusiness(response.data.business));
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

function setBusiness(business) {
    return {
        type: SET_BUSINESS_INFO,
        payload: business
    };
}
