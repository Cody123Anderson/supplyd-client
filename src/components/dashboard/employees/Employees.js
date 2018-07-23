import React, { Component } from 'react';

import TitleBar from '../TitleBar';

export default class Employees extends Component {
  render() {
    return (
      <div className="employees">
        <TitleBar title="Manage your employees" subtitle="Create a new employee to get a new hire box sent"></TitleBar>
      </div>
    );
  }
}
