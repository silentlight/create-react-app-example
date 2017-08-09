import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import thunkMiddleware from 'redux-thunk';

import configureLogger from './logger';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunkMiddleware,
  ];

  const loggerMiddleware = configureLogger();

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(loggerMiddleware);
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  return createStore(
    combineReducers(reducers),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );
}
