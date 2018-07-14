import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../constants/routes';
import TopBar from '../../TopBar';
import Employees from '../../Employees';

export default class EmployeeRoutes extends Component {
    render() {
        return (
            <div className="EmployeeRoutes">
            <TopBar />
                <Switch>
                    <Route exact path={routes.employees} component={Employees} />
                </Switch>
            </div>
        );
    }
}
