import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../../constants/routes';
import TopBar from '../TopBar';
import LandingPage from '../LandingPage';
import Register from '../Register';
import SignIn from '../SignIn';
import SwagProfile from '../SwagProfile';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar foo="bar" />
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.signIn} component={SignIn} />
          <Route path={routes.swagProfile} component={SwagProfile} />
        </div>
      </BrowserRouter>
    );
  }
}
