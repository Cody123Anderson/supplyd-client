import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Styled from './styled';
import routes from '../../../../constants/routes';
import LeftDashboardNav from '../../../leftNav/LeftNav';
import EmployeeRoutes from './EmployeeRoutes';
import RequireAuth from '../RequireAuth';

export default class DashboardRoutes extends Component {
    render() {
        return (
            <Styled.DashboardRoutes>
                <LeftDashboardNav />
                <Styled.DashboardContainer>
                    <Switch>
                        <Route path={routes.employees} component={RequireAuth(EmployeeRoutes)} />
                    </Switch>
                </Styled.DashboardContainer>
            </Styled.DashboardRoutes>
        );
    }
}
