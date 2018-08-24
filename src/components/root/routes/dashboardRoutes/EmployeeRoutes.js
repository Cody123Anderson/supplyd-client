import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../../../constants/routes';
import Employees from '../../../dashboard/employees/Employees';
import CreateEmployee from '../../../dashboard/employees/CreateEmployee';
import { setTab } from '../../../../actions/tabActions';
import constants from '../../../../constants';

class EmployeeRoutes extends Component {
    componentDidMount() {
        this.props.setTab(constants.upperDashboardLinks.employees.name);
    }

    render() {
        return (
            <Switch>
                <Route exact path={routes.employees} component={Employees} />
                <Route exact path={routes.createEmployee} component={CreateEmployee} />
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, { setTab })(EmployeeRoutes);
