import React, { PureComponent } from 'react';

import { IconMenu, IconButton, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { colorFont } from '../../styles/variables';

export default class SettingsMenu extends PureComponent {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={colorFont} /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={this.props.onLogoutClick} />
      </IconMenu>
    );
  }
}
