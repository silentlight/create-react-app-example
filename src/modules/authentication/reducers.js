import { fromJS } from 'immutable';

import types from "./types";

const initialState = fromJS({
  currentUser: null,
  authenticating: false,
  authenticationError: null,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.VALIDATE_TOKEN_REQUEST:
      return state
        .set('authenticating', true)
        .set('authenticationError', null);

    case types.LOGIN_SUCCESS:
    case types.VALIDATE_TOKEN_SUCCESS:
      return state
        .set('currentUser', fromJS(action.payload.data))
        .set('authenticating', false)
        .set('authenticationError', null);

    case types.LOGIN_ERROR:
    case types.VALIDATE_TOKEN_ERROR:
      return state
        .set('currentUser', null)
        .set('authenticating', false)
        .set('authenticationError', fromJS(action.payload));

    case types.LOGOUT_SUCCESS:
      return state
        .set('currentUser', null);

    default:
      return state;
  }
}
