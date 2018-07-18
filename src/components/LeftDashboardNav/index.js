import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Styled from './styled';

class LeftDashboardNav extends Component {
    render() {
        return (
            <Styled.LeftDashboardNav>
                Left Nav
            </Styled.LeftDashboardNav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authError: state.user.authError,
        userToken: state.user.token
    };
}

export default connect(mapStateToProps)(LeftDashboardNav);