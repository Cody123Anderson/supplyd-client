import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Styled from './styled';
import routes from '../../../../constants/routes';
import MobileNav from '../../../Navigation/MobileNav';
import LeftDashboardNav from '../../../Navigation/leftNav';
import EmployeeRoutes from './EmployeeRoutes';
import Home from '../../../dashboard/home/Home';
import PaymentInfo from '../../../dashboard/paymentInfo/PaymentInfo';
import AccountInfo from '../../../dashboard/accountInfo/AccountInfo';
import SupportCenter from '../../../dashboard/supportCenter/SupportCenter';
import RequireAuth from '../RequireAuth';

export default class DashboardRoutes extends Component {
    render() {
        return (
            <Styled.DashboardRoutes>
                <MobileNav />
                <LeftDashboardNav />
                <Styled.DashboardContainer>
                    <Switch>
                        <Route path={routes.employees} component={RequireAuth(EmployeeRoutes)} />
                        <Route exact path={routes.home} component={RequireAuth(Home)}/>
                        <Route exact path={routes.paymentInfo} component={RequireAuth(PaymentInfo)}/>
                        <Route exact path={routes.accountInfo} component={RequireAuth(AccountInfo)}/>
                        <Route exact path={routes.supportCenter} component={RequireAuth(SupportCenter)}/>
                    </Switch>
                </Styled.DashboardContainer>
            </Styled.DashboardRoutes>
        );
    }
}
