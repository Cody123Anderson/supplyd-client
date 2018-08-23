import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../constants/routes';
import OnboardingNewHires from '../../onboarding/OnboardingNewHires';
import OnboardingNumEmployees from '../../onboarding/OnboardingNumEmployees';

export default class OnboardingRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={routes.onboardingNumEmployees} component={OnboardingNumEmployees} />
                <Route exact path={routes.OnboardingNewHires} component={OnboardingNewHires} />
            </Switch>
        );
    }
}
