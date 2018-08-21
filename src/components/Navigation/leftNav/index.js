import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LeftNav.scss';
import LeftNavItems from './LeftNavItems';
import constants from '../../../constants';
import { logoutUser } from '../../../actions/userActions';

class LeftDashboardNav extends Component {
    render() {
        const { user } = this.props;
        const items = {
            top: constants.upperDashboardLinks,
            bottom: constants.lowerDashboardLinks
        };

        return (
            <div className="left-dashboard-nav">
                <div className="title">SUPPLYD</div>
                <div className="bus-name">{user.businessName}</div>
                <div className="sign-out">
                    <span className="sign-out-button" onClick={this.props.logoutUser}>
                        Sign Out
                    </span>
                </div>
                <LeftNavItems items={items}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { logoutUser })(LeftDashboardNav);