import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import reducers from '../reducers';
import enhancers from '../enhancers';

export default function configureStore(initialState = {}) {
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
