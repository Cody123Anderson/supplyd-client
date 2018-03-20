import React, { Component } from 'react';

import TopBar from '../top-bar/TopBar';
import LandingPage from '../landing-page/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
