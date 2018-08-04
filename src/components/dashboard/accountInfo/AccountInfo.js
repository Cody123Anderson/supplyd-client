import React from 'react';
import { connect } from 'react-redux'

import { setTab } from '../../../actions/tabActions';
import constants from '../../../constants';

class AccountInfo extends React.Component {
    componentDidMount() {
        this.props.setTab(constants.lowerDashboardLinks.accountInfo.name);
    }

    render() {
        return <div>AccountInfo Info</div>
    }
}

export default connect(null, { setTab })(AccountInfo);