import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.scss';
import App from './components/root/App/index';
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types';
import { isExpired } from './utils/jwtUtils';
import { getUser } from './actions/userActions';

// Create Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

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
