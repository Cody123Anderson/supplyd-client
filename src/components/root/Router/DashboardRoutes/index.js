import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Styled from './styled';
import routes from '../../../../constants/routes';
import LeftDashboardNav from '../../../LeftDashboardNav';
import EmployeeRoutes from './EmployeeRoutes';

export default class DashboardRoutes extends Component {
    render() {
        return (
            <Styled.DashboardRoutes>
                <LeftDashboardNav />
                <Styled.DashboardContainer>
                    <Switch>
                        <Route path={routes.employees} component={EmployeeRoutes} />
                    </Switch>
                </Styled.DashboardContainer>
            </Styled.DashboardRoutes>
        );
    }
}
