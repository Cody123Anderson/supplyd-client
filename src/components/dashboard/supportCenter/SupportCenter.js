import React from 'react';
import { connect } from 'react-redux'

import { setTab } from '../../../actions/tabActions';
import constants from '../../../constants';

class SupportCenter extends React.Component {
    componentDidMount() {
        this.props.setTab(constants.lowerDashboardLinks.supportCenter.name);
    }

    render() {
        return <div>Support Center</div>
    }
}

export default connect(null, { setTab })(SupportCenter);