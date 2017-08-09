import { createSelector } from 'reselect';

const sliceRoot = () => (state) => {
  return state.get('authentication');
};

const getCurrentUser = () => createSelector(
  sliceRoot(),
  (rootSelector) => rootSelector.get('currentUser')
);

const getAuthenticationError = () => createSelector(
  sliceRoot(),
  (rootSelector) => rootSelector.get('authenticationError')
);

const isAuthenticated = () => createSelector(
  getCurrentUser(),
  (currentUser) => (currentUser) ? true : false
);

const isAuthenticating = () => createSelector(
  sliceRoot(),
  (rootSelector) => rootSelector.get('authenticating')
);

export default {
  getCurrentUser,
  getAuthenticationError,
  isAuthenticated,
  isAuthenticating,
};
