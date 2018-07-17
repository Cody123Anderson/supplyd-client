import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import moment from 'moment';

import './index.scss';
import App from './components/root/App/index';
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types';

// Create Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Get token if one exists
const token = localStorage.getItem('token');

// If user has a token, and it's not expired, consider them authenticated
if (token) {
    const decoded = jwtDecode(token);
    const now = moment().format();

    if (moment(decoded.exp).isAfter(now, 'day')) {
        // token is still valid
        store.dispatch({ type: AUTH_USER, payload: token });
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
