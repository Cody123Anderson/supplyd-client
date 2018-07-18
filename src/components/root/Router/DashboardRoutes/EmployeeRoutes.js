import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../../constants/routes';
import Employees from '../../../Employees';

export default class EmployeeRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={routes.employees} component={Employees} />
            </Switch>
        );
    }
}
