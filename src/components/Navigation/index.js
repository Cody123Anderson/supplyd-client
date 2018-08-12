import React, { Component } from 'react';

import LeftDashboardNav from './leftNav';
import MobileNav from './MobileNav';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <MobileNav />
        <LeftDashboardNav />
      </div>
    );
  }
}

export default Navigation;
