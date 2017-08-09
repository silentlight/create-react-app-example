import React, { Component } from 'react';
import _ from 'lodash';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper'
import { connect } from 'react-redux';

import { AUTH_HEADERS } from 'config/constants';

import selectors from './selectors';
import operations from './operations';

const locationHelper = locationHelperBuilder({});

/**
 * Store authentication headers to localStorage
 */
export function storeAuthHeaders(response) {
  const headers = _.pick(response.headers, AUTH_HEADERS);

  if (!_.isEmpty(headers)) {
    localStorage.setItem('authHeaders', JSON.stringify(headers));
  }
}

/**
 * Remove authentication headers
 */
export function resetAuthHeaders() {
  localStorage.removeItem('authHeaders')
}

/**
 * Retrieve authentication headers from localStorage
 */
export function getAuthHeaders() {
  return JSON.parse(localStorage.getItem('authHeaders')) || {};
}

// AUTHENTICATION HOC

/**
 * HOC for dispatching validate token request
 */
export const withValidToken = (ComposedComponent) => {
  class ComponentWithValidToken extends Component {

    componentWillMount() {
      this.props.validateTokenRequest();
    }

    render() {
      return (this.props.authenticating) ? <div>Loading...</div> : <ComposedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      authenticating: selectors.isAuthenticating()(state),
      authenticated: selectors.isAuthenticated()(state),
    }
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      validateTokenRequest: () => dispatch(operations.validateTokenRequest()),
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithValidToken);
};

/**
 * HOC for authenticated components
 */
export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: selectors.isAuthenticated(),
  authenticatingSelector: selectors.isAuthenticating(),
  wrapperDisplayName: 'UserIsAuthenticated'
});

/**
 * HOC for not authenticated components
 */
export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/dashboard',
  allowRedirectBack: false,
  authenticatedSelector: state => selectors.isAuthenticated()(state) === false && selectors.isAuthenticating()(state) === false,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});