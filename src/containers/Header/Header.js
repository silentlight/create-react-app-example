import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { NavLink } from 'components';

import {
  authenticationSelectors,
  authenticationOperations,
} from 'modules/authentication';

import './Header.css';

class Header extends PureComponent {

  handleClick = () => {
    this.props.logout();
  };

  renderLinks = () => {
    if(this.props.authenticated) {
      return [
        <li key="dashboard"><NavLink to="/dashboard">Dashboard</NavLink></li>,
        <li key="posts"><NavLink to="/posts">Posts</NavLink></li>,
        <li key="logout"><NavLink to="#" onClick={this.handleClick}>Logout</NavLink></li>,
      ];
    }
    else {
      return [
        <li key="home"><NavLink to="/">Home</NavLink></li>,
        <li key="login"><NavLink to="/login">Login</NavLink></li>,
      ]
    }
  };

  render() {
    return (
      <ul className="Header">
        {this.renderLinks()}
      </ul>
    )
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  logout: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: authenticationSelectors.isAuthenticated()(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(authenticationOperations.logoutRequest()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);