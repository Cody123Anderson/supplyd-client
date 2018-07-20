import React, { Component } from 'react';

import './LeftNav.scss';
import LeftNavItems from './LeftNavItems';
import constants from '../../constants';

export default class LeftDashboardNav extends Component {
    render() {
        return (
            <div className="left-dashboard-nav">
                <div className="title">SUPPLYD</div>
                <div className="bus-name">Dealtrix LLC</div>
                <div className="sign-out">Sign Out</div>
                <LeftNavItems items={constants.upperDashboardLinks} />
            </div>
        );
    }
}