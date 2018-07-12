import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from '../../constants/routes';
import LandingPage from '../LandingPage';
import Register from '../Register';
import SignIn from '../SignIn';
import SwagProfile from '../SwagProfile';
import SwagProfileComplete from '../SwagProfile/SwagProfileComplete';

const history = createBrowserHistory()

export default class MyRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.signIn} component={SignIn} />
          <Route path={routes.swagProfile} component={SwagProfile} />
          <Route path={routes.swagProfileComplete} component={SwagProfileComplete} />
        </Switch>
      </Router>
    );
  }
}
