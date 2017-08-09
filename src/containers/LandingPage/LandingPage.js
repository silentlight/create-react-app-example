import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default LandingPage;