import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './components/root/App';
import { AUTH_USER } from './actions/types';
import { isExpired } from './utils/jwtUtils';
import { getUser } from './actions/userActions';
import { store } from './reduxStore';

// Get token if one exists
const token = localStorage.getItem('token');

// If user has a token, and it's not expired, consider them authenticated
if (token) {
    if (!isExpired(token)) {
        // token is still valid
        store.dispatch({ type: AUTH_USER, payload: token });

        // Get the user
        store.dispatch(getUser(token));
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
