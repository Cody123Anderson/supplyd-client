import axios from 'axios';

import { API_URL } from '../constants';
// import {
//     CREATE_BUSINESS,
// } from './types';

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
                    console.error('error registering business: ', err);
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
                console.error('error checking business name: ', err);
                reject(err);
            });
    });
}