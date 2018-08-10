import React, { Component } from 'react';

import LeftDashboardNav from './leftNav';
import MobileNav from './MobileNav';

export class Navigation extends Component {
  state = {
    isMobile: false,
  };

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  updateScreenSize = () => {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const isMobile = width <= 1000;

    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

  render() {
    const { isMobile } = this.state;

    if (isMobile) {
      return <MobileNav />;
    }

    return <LeftDashboardNav />;
  }
}

export default Navigation;
