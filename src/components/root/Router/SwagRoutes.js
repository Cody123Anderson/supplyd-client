import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../constants/routes';
import SwagProfile from '../../SwagProfile/SwagProfile';
import SwagProfileComplete from '../../SwagProfile/SwagProfileComplete';

export default class SwagProfileRoutes extends Component {
    render() {
        return (
            <div className="SwagProfileRoutes">
                <Switch>
                    <Route path={routes.swagProfile()} component={SwagProfile} />
                    <Route path={routes.swagProfileComplete()} component={SwagProfileComplete} />
                </Switch>
            </div>
        );
    }
}
