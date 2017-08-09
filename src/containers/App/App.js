import React, { Component } from 'react';

import './App.css';

import { PublicLayout, AuthenticatedLayout } from 'components';

class App extends Component {
  render() {
    const LayoutComponent = (this.props.authenticated) ? AuthenticatedLayout : PublicLayout;

    return (
      <LayoutComponent>
        {this.props.children}
      </LayoutComponent>
    );
  }
}

export default App;
