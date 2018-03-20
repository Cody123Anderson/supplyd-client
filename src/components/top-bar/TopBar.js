import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';

import './TopBar.scss';
import SettingsMenu from './SettingsMenu';
import { colorPrimary, fontWeightLight } from '../../styles/variables';

class TopBar extends Component {
  state = {
    logged: true
  }

  styles = {
    titleStyle: {
      color: colorPrimary,
      fontSize: '22px',
      letterSpacing: '5.08px',
      fontWeight: fontWeightLight
    }
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

export default TopBar;
