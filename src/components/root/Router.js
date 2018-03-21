import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../../constants/routes';
import TopBar from '../top-bar/TopBar';
import LandingPage from '../landing-page/LandingPage';
import Register from '../register/Register';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.register} component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}
