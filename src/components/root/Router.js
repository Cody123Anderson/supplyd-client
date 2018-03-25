import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../../constants/routes';
import TopBar from '../TopBar';
import LandingPage from '../LandingPage';
import Register from '../Register';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar foo="bar" />
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.register} component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}
