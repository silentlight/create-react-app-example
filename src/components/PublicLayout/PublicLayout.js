import React, { Component } from 'react';

import { Header } from 'containers';
import logo from 'images/logo.svg';

class PublicLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PublicLayout;
