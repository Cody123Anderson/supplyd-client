import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Styled from './styled';
import routes from '../../../../constants/routes';
import LeftDashboardNav from '../../../leftNav/LeftNav';
import EmployeeRoutes from './EmployeeRoutes';
import Home from '../../../dashboard/home/Home';
import RequireAuth from '../RequireAuth';

export default class DashboardRoutes extends Component {
    render() {
        return (
            <Styled.DashboardRoutes>
                <LeftDashboardNav />
                <Styled.DashboardContainer>
                    <Switch>
                        <Route path={routes.employees} component={RequireAuth(EmployeeRoutes)} />
                        <Route exact path={routes.home} component={RequireAuth(Home)}/>
                    </Switch>
                </Styled.DashboardContainer>
            </Styled.DashboardRoutes>
        );
    }
}
