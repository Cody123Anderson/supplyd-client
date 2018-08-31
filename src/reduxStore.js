import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.scss';
import rootReducer from './reducers';

const reduxDevTools = () => {
  if (process.env.REACT_APP_STAGE === 'development') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return;
};

// Create and export Redux Store
export const store = createStore(
  rootReducer,
  reduxDevTools(),
  applyMiddleware(thunk)
);

export const getState = () => {
  return store.getState();
};
