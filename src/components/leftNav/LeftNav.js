import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LeftNav.scss';
import LeftNavItems from './LeftNavItems';
import constants from '../../constants';

class LeftDashboardNav extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="left-dashboard-nav">
                <div className="title">SUPPLYD</div>
                <div className="bus-name">{user.businessName}</div>
                <div className="sign-out">Sign Out</div>
                <LeftNavItems items={constants.upperDashboardLinks} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(LeftDashboardNav);