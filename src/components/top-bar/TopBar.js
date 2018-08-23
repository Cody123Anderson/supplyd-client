import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './TopBar.scss';
import Button from '../ui-components/Button';
import routes from '../../constants/routes';
import UIBoundary from '../ui-components/UIBoundary';

class TopBar extends Component {
  static propTypes = {
    router: PropTypes.object
  }

  onTitleClick = () => {
    this.props.history.push(routes.landingPage);
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="top-bar">
        <UIBoundary>
          <div className="container">
            <span className="title" onClick={this.onTitleClick}>SUPPLYD</span>

            <Button
              variant="flat"
              color="secondary"
              to={isLoggedIn ? routes.home : routes.signIn}
            >
              {isLoggedIn ? 'My Dashboard' : 'Sign In'}
            </Button>
          </div>
        </UIBoundary>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
}

export default connect(mapStateToProps)(withRouter(TopBar));
