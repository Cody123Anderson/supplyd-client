import axios from 'axios';

import { API_URL } from '../constants/env';
import { getOptions } from './actionUtils';
import {
    CREATE_EMPLOYEE,
    GET_EMPLOYEE,
    GET_EMPLOYEES,
    UPDATE_EMPLOYEE
} from './types';

export function createEmployee(email, password, businessId, businessName) {
    return (dispatch) => {
        const data = { email, password, businessId, businessName };

        axios.post(`${API_URL}/employees`, data)
            .then((response) => {
                const { employee } = response.data;

                dispatch({ type: CREATE_EMPLOYEE, payload: employee });
            })
            .catch((err) => {
                console.error('error creating employee: ', err);
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
                console.error('error getting the employee: ', err);
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
                console.error('error getting the employees: ', err);
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
                console.error('error updating the employee: ', err);
            });
    };
}