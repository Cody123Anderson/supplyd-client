import axios from 'axios';

import { API_URL } from '../constants/env';
import { getOptions } from './actionUtils';
import {
    CREATE_EMPLOYEE,
    GET_EMPLOYEE,
    GET_EMPLOYEES,
    UPDATE_EMPLOYEE
} from './types';

export function createEmployee(employee) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/employees`, employee)
                .then((response) => {
                    const { employee } = response.data;

                    dispatch({ type: CREATE_EMPLOYEE, payload: employee });

                    resolve(employee);
                })
                .catch((err) => {
                    console.error('general error creating employee: ', err);
                    console.error('server error creating employee: ', err.response);

                    reject(err.response);
                });
        });
    };
}

export function getEmployee(id) {
    return (dispatch) => {
        const options = getOptions();

        axios.get(`${API_URL}/employees/${id}`, options)
            .then((response) => {
                const { employee } = response.data;

                // Update current employee in Redux state
                dispatch({ type: GET_EMPLOYEE, payload: employee });
            })
            .catch((err) => {
                console.error('error getting the employee: ', err.response);
            });
    };
}

export function getEmployees() {
    return (dispatch) => {
        const options = getOptions();

        axios.get(`${API_URL}/employees`, options)
            .then((response) => {
                const { employees } = response.data;

                // Update current employee in Redux state
                dispatch({ type: GET_EMPLOYEES, payload: employees });
            })
            .catch((err) => {
                console.error('error getting the employees: ', err.response);
            });
    };
}

export function updateEmployee(body) {
    return (dispatch) => {
        const options = getOptions();

        axios.put(`${API_URL}/employees`, body, options)
            .then((response) => {
                const { employee } = response.data;

                // Update employee in Redux state
                dispatch({ type: UPDATE_EMPLOYEE, payload: employee });
            })
            .catch((err) => {
                console.error('error updating the employee: ', err.response);
            });
    };
}