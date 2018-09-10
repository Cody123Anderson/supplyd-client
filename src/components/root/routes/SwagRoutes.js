import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../constants/routes';
import SwagProfile from '../../SwagProfile/SwagProfile';
import SwagProfileComplete from '../../SwagProfile/SwagProfileComplete';
import SwagProfileNewHire from '../../SwagProfile/SwagProfileNewHire';

export default class SwagRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path={routes.swagProfileNewHire()} component={SwagProfileNewHire} />
                <Route path={routes.swagProfile()} component={SwagProfile} />
                <Route path={routes.swagProfileComplete()} component={SwagProfileComplete} />
            </Switch>
        );
    }
}
