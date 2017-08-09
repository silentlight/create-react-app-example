import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import './NavLink.css';

/**
 * Link which includes active state
 */
class NavLink extends PureComponent {
  render() {
    return <Link {...this.props} className="NavLink" activeClassName="active" />
  }
}

NavLink.propTypes = {
  /** Url where user will go after clicking */
  to: PropTypes.string.isRequired,
};

export default NavLink;