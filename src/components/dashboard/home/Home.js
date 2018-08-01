import React from 'react';
import { connect } from 'react-redux';

import TitleBar from '../TitleBar';
import constants from '../../../constants';
import { setTab } from '../../../actions/tabActions';

class Home extends React.Component {
    componentDidMount() {
        this.props.setTab(constants.upperDashboardLinks.home.name);
    }

    render() {
        return (
            <div>
                <TitleBar title="Welcome to Supplyd Dashboard!"/>
            </div>
        );
    }
}

export default connect(null, { setTab })(Home);