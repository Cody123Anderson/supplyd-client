import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Employees.scss';
import TitleBar from '../TitleBar';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';

const columns = [
  {
    id: 'name',
    Header: 'Name',
    accessor: d => `${d.firstName} ${d.lastName}` // Custom value accessors!
  }, {
    Header: 'Work Email',
    accessor: 'workEmail',
  }, {
    Header: 'Status',
    accessor: 'status'
  }];

class Employees extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <div className="employees">
        <TitleBar title="Manage your employees" subtitle="Create a new employee to get a new hire box sent"></TitleBar>
        <div className="employees-table">
          <Table data={this.props.employees} columns={columns} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees.all
  };
}

export default connect(mapStateToProps, { getEmployees })(Employees);
