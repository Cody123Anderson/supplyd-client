import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import SettingsMenu from './SettingsMenu';
import Button from '../ui-components/Button';
import v from '../../styles/variables';
import routes from '../../constants/routes';
import * as Styled from './styled';

const styles = {
  signInBtn: {
    alignSelf: 'flex-end',
    color: v.colorFont,
    display: 'inline-block',
    fontWeight: v.fontWeightLight,
    paddingTop: '9px'
  }
};

class TopBar extends Component {
  static propTypes = {
    router: PropTypes.object
  }

  state = {
    signedIn: false
  }

  onTitleClick = () => {
    this.props.history.push(routes.landingPage);
  }

  onToggleLogin = () => {
    this.setState(prevState => {
      return { signedIn: !prevState.signedIn };
    });
  }

  render() {
    return (
      <Styled.TopBar>
        <Styled.Title onClick={this.onTitleClick}>SUPPLYD</Styled.Title>
        {
          this.state.signedIn &&
          <SettingsMenu onLogoutClick={this.onToggleLogin} />
        }
        {
          !this.state.signedIn &&
          <Button variant="flat" color="secondary" onClick={this.onToggleLogin}>
            Sign In
          </Button>
        }
      </Styled.TopBar>
    );
  }
}

export default withRouter(withStyles(styles)(TopBar));
