import { Iterable } from 'immutable';
import { createLogger } from 'redux-logger'

export default function configureLogger() {
  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
  };

  return createLogger({
    collapsed: (getState, action) => true,
    stateTransformer
  });
}
