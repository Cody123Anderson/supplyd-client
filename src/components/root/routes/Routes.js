import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from '../../../constants/routes';
import LandingPage from '../../LandingPage';
import Register from '../../Register';
import SignIn from '../../SignIn';
import SwagRoutes from './SwagRoutes';
import DashboardRoutes from './dashboardRoutes/DashboardRoutes';
import Contact from '../../Contact/Contact';
import OnboardingRoutes from './OnboardingRoutes';
import RequireAuth from './RequireAuth';

const history = createBrowserHistory();

export default class MyRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.signIn} component={SignIn} />
          <Route path={routes.swag} component={SwagRoutes} />
          <Route path={routes.contactUs} component={Contact} />
          <Route path={routes.onboarding} component={RequireAuth(OnboardingRoutes)} />
          <Route path={routes.dashboard} component={RequireAuth(DashboardRoutes)} />
        </Switch>
      </Router>
    );
  }
}