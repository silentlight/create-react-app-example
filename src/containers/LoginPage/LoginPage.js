import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from 'components';

import {
  authenticationOperations,
  authenticationSelectors,
} from 'modules/authentication';

class LoginPage extends Component {

  handleFormSubmit = (values) => {
    this.props.loginUser(values);
  }

  render() {
    const { isAuthenticating } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm onFormSubmit={this.handleFormSubmit} isAuthenticating={isAuthenticating} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticating: authenticationSelectors.isAuthenticating()(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (data) => dispatch(authenticationOperations.loginRequest(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);