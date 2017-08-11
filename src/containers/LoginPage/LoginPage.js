import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from 'containers';

import {
  authenticationOperations,
  authenticationSelectors,
} from 'modules/authentication';

export class LoginPage extends Component {

  handleFormSubmit = (values) => {
    this.props.loginUser(values);
  }

  render() {
    const { authenticating } = this.props;

    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm onSubmit={this.handleFormSubmit} authenticating={authenticating} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticating: authenticationSelectors.isAuthenticating()(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (data) => dispatch(authenticationOperations.loginRequest(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);