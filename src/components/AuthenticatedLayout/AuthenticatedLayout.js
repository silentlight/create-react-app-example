import React, { Component } from 'react';

import { Header } from 'containers';

class AuthenticatedLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AuthenticatedLayout;
