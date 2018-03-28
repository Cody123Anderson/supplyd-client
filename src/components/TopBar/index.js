import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

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

  onTitleClick = () => {
    this.props.history.push(routes.landingPage);
  }

  render() {
    return (
      <Styled.TopBar>
        <Styled.Title onClick={this.onTitleClick}>SUPPLYD</Styled.Title>
        <Button variant="flat" color="secondary" to={routes.signIn}>
          Sign In
        </Button>
      </Styled.TopBar>
    );
  }
}

export default withRouter(withStyles(styles)(TopBar));
