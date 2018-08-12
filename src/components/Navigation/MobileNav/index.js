import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AppBar, IconButton, MenuItem, Menu, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import constants from '../../../constants';
import { logoutUser } from '../../../actions/userActions';
import * as Styled from './styled';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#333333',
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: '#6AD1B0',
        fontWeight: 300,
      },
      root: {
        flexGrow: 1,
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: '#333333',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#fff',
        fontWeight: 300,

        '&$selected': {
          color: '#fff',
          backgroundColor: '#76d5b7',
        },
        '&:hover': {
          backgroundColor: '#76d5b7',
        },
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: '#6AD1B0',
      },
    },
  },
});

class MobileNav extends Component {
  state = {
    anchorEl: null,
  };

  static propTypes = {
    activeTab: PropTypes.string,
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderItems(items) {
    const { activeTab } = this.props;

    const navItems = [];

    Object.entries(items).forEach(([key, value]) => {
      navItems.push(
        <MenuItem onClick={this.handleClose} key={value.name} selected={activeTab === value.name}>
          <Styled.NavLink to={value.to}>{value.name}</Styled.NavLink>
        </MenuItem>
      );
    });

    return navItems;
  }

  render() {
    const { anchorEl } = this.state;
    const menuOpen = Boolean(anchorEl);

    const items = {
      top: constants.upperDashboardLinks,
      bottom: constants.lowerDashboardLinks,
    };

    return (
      <Styled.MobileNav>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="default">
            <Toolbar>
              <Typography variant="title" color="primary">
                SUPPLYD
              </Typography>
              <IconButton
                aria-owns={menuOpen ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleOpen}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuOpen}
                onClose={this.handleClose}
                classes={{ paper: 'menu-styling' }}
              >
                {this.renderItems(items.top)}
                <Styled.Divider />
                {this.renderItems(items.bottom)}
                <br />
                <Styled.SignOut onClick={this.props.logoutUser} key="sign out">
                  Sign Out
                </Styled.SignOut>
              </Menu>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </Styled.MobileNav>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.tab.active,
  };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(MobileNav);
