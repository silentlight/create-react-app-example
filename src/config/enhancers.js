import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import configureLogger from './initializers/logger';

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

export default enhancers;