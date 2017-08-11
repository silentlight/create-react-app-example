import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import { PublicLayout, AuthenticatedLayout } from 'components';

export class App extends Component {
  render() {
    const LayoutComponent = (this.props.authenticated) ? AuthenticatedLayout : PublicLayout;

    return (
      <LayoutComponent>
        {this.props.children}
      </LayoutComponent>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool,
};

export default App;
