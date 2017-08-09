import types from './types';

const loginRequest = (payload) => {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
};

const loginError = (error) => {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
};

const logoutRequest = (payload) => {
  return {
    type: types.LOGOUT_REQUEST,
    payload,
  };
};

const logoutSuccess = (payload) => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: payload,
  };
};

const logoutError = (error) => {
  return {
    type: types.LOGOUT_ERROR,
    error,
  };
};

const validateTokenRequest = (payload) => {
  return {
    type: types.VALIDATE_TOKEN_REQUEST,
    payload,
  }
};

const validateTokenSuccess = (payload) => {
  return {
    type: types.VALIDATE_TOKEN_SUCCESS,
    payload,
  }
};

const validateTokenError = (error) => {
  return {
    type: types.VALIDATE_TOKEN_ERROR,
    error,
  }
};

export default {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  validateTokenRequest,
  validateTokenSuccess,
  validateTokenError,
}