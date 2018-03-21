import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, FlatButton } from 'material-ui';
import { withRouter } from "react-router-dom";

import './TopBar.scss';
import SettingsMenu from './SettingsMenu';
import { colorPrimary, fontWeightLight } from '../../styles/variables';
import routes from '../../constants/routes';

class TopBar extends Component {
  static propTypes = {
    router: PropTypes.object
  }

  state = {
    logged: true
  }

  styles = {
    titleStyle: {
      color: colorPrimary,
      cursor: 'pointer',
      fontSize: '22px',
      letterSpacing: '5.08px',
      fontWeight: fontWeightLight
    }
  }

  onTitleClick = () => {
    this.props.history.push(routes.landingPage);
  }

  onToggleLogin = () => {
    this.setState(prevState => {
      return { logged: !prevState.logged };
    });
  }

  render() {
    return (
      <AppBar
        className="top-bar"
        showMenuIconButton={false}
        title="SUPPLYD"
        titleStyle={this.styles.titleStyle}
        onTitleClick={this.onTitleClick}
        iconElementRight={
          this.state.logged ?
          <SettingsMenu onLogoutClick={this.onToggleLogin} /> :
          <FlatButton
            className="tb-sign-in-btn"
            label="Sign In"
            onClick={this.onToggleLogin}
          />
        }
      >
      </AppBar>
    );
  }
}

export default withRouter(TopBar);
