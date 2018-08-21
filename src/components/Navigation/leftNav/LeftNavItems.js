import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './LeftNavItems.scss';

class LeftNavItems extends Component {
    static propTypes = {
        activeTab: PropTypes.string,
        items: PropTypes.object
    }

    renderItems(items) {
        const { activeTab } = this.props;

        const navItems = [];

        Object.entries(items).forEach(([key, value]) => {
            navItems.push(
                <div className={`left-nav-item ${activeTab === value.name ? 'active' : ''}`} key={value.name}>
                    <Link to={value.to}>{value.name}</Link>
                </div>
            );
        });

        return navItems;
    }

    render() {
        const { items } = this.props;
        return (
            <div className="left-nav-items">
                {this.renderItems(items.top)}
                <div className="left-nav-divider"/>
                {this.renderItems(items.bottom)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.tab.active
    };
}

export default connect(mapStateToProps)(LeftNavItems);