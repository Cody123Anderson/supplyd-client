import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './DashboardRoutes.scss';
import routes from '../../../../constants/routes';
import MobileNav from '../../../Navigation/MobileNav';
import LeftDashboardNav from '../../../Navigation/leftNav';
import EmployeeRoutes from './EmployeeRoutes';
import Home from '../../../dashboard/home/Home';
import PaymentInfo from '../../../dashboard/PaymentInfo';
// import AccountInfo from '../../../dashboard/accountInfo/AccountInfo';
// import SupportCenter from '../../../dashboard/supportCenter/SupportCenter';
import { getBusiness } from '../../../../actions/businessActions';

class DashboardRoutes extends Component {
    state = {
      loaded: false
    }

    componentDidMount() {
      this.props.getBusiness(this.props.businessId);
    }

    componentDidUpdate() {
      const { business } = this.props;

      if (business.id && !business.numEmployees) {
        this.props.history.push(routes.onboardingNumEmployees);
      } else if (business.id && !business.newHiresPerMonth) {
        this.props.history.push(routes.onboardingNewHires);
      } else {
        if (!this.state.loaded) {
          this.setState({ loaded: true });
        }
      }
    }

    render() {
        if (!this.state.loaded) {
            return <div className="dashboard-routes">Loading...</div>
        }

        return (
            <div className="dashboard-routes">
                <MobileNav />
                <LeftDashboardNav />
                <div className="dashboard-container">
                    <Switch>
                        <Route path={routes.employees} component={EmployeeRoutes} />
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.paymentInfo} component={PaymentInfo}/>
                          {/* <Route exact path={routes.accountInfo} component={RequireAuth(AccountInfo)}/> */}
                          {/* <Route exact path={routes.supportCenter} component={RequireAuth(SupportCenter)}/> */}
                    </Switch>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    business: state.business,
    businessId: state.user.businessId
  };
}

export default connect(mapStateToProps, { getBusiness })(DashboardRoutes);
