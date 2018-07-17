import axios from 'axios';

import { API_URL } from '../constants';
import {
    AUTH_USER,
    AUTH_ERROR,
    GET_USER,
    UNAUTH_USER,
    UPDATE_USER
} from './types';

export function loginUser(email, password) {
    return (dispatch) => {
        const data = { email, password };
        axios.post(`${API_URL}/users/login`, data)
            .then((response) => {
                const token = response.data.token;

                // Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER, payload: token });

                // Save the token to local storage
                localStorage.setItem('token', token);

                // Clear existing error messages and user if any
                dispatch(authError(''));
            })
            .catch((err) => {
                console.error('error logging in user: ', err);
                // Invalid Email or Password - Should actually check off of status code in the future
                dispatch(authError('Incorrect email or password'));
            });
    };
}

export function registerUser(email, password) {
    return (dispatch) => {
        const data = { email, password };
        axios.post(`${API_URL}/users`, data)
            .then((response) => {
                const token = response.data.token;

                // Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER, payload: token });

                // Save the token to local storage
                localStorage.setItem('token', token);

                // Clear existing error messages if any
                dispatch(authError(''));
            })
            .catch((err, response) => {
                console.error('error registering user: ', err);
                // Email already exists
                dispatch(authError('An account with this email already exists'));
            });
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({ type: UNAUTH_USER });
    }
}

export function getUser(token) {
    return (dispatch) => {
        const options = { headers: { Authorization: token } };

        axios.get(`${API_URL}/users/authenticated`, options)
            .then((response) => {
                const user = response.data.user;

                // Update user in Redux state
                dispatch({ type: GET_USER, payload: user });
            })
            .catch((err) => {
                console.error('error getting the user: ', err);
            });
    };
}

export function updateUser(body, token) {
    return (dispatch) => {
        const options = { headers: { Authorization: token } };

        axios.put(`${API_URL}/users`, body, options)
            .then((response) => {
                const user = response.data.user;

                // Update user in Redux state
                dispatch({ type: UPDATE_USER, payload: user });
            })
            .catch((err) => {
                console.error('error updating the user: ', err);
            });
    };
}