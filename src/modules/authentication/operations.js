import { parseResponse, parseError } from 'utils/request';

import actions from "./actions";
import api from './api';
import { storeAuthHeaders, resetAuthHeaders, getAuthHeaders } from './utils';

const loginRequest = (payload) => (dispatch) => {
  dispatch(actions.loginRequest(payload));

  api.login(payload.get('email'), payload.get('password'))
    .then(response => {
      storeAuthHeaders(response);

      dispatch(actions.loginSuccess(parseResponse(response)))
    })
    .catch(error => dispatch(actions.loginError(parseError(error))));
};

const logoutRequest = () => (dispatch) => {
  dispatch(actions.logoutRequest());

  api.logout()
    .then(response => {
      resetAuthHeaders();

      dispatch(actions.logoutSuccess(parseResponse(response)))
    })
    .catch(error => dispatch(actions.logoutError(parseError(error))));
};

const validateTokenRequest = () => (dispatch) => {
  const authHeaders = getAuthHeaders();

  dispatch(actions.validateTokenRequest(authHeaders));

  api.validateToken(authHeaders)
    .then(response => {
      storeAuthHeaders(response);

      dispatch(actions.validateTokenSuccess(parseResponse(response)))
    })
    .catch(error => {
      resetAuthHeaders();

      dispatch(actions.validateTokenError(parseError(error)))
    });
};

export default {
  loginRequest,
  logoutRequest,
  validateTokenRequest,
};