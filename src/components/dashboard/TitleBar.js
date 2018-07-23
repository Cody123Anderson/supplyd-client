import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TitleBar.scss';

class TitleBar extends Component {
    static propTypes = {
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        title: 'Supplyd Dashboard'
    }

    render() {
        return (
            <div className="title-bar">
                <div className="title">{this.props.title}</div>
                <div className="subtitle">{this.props.subtitle}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TitleBar);