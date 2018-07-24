import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAddCircle from 'react-icons/lib/md/add-circle';

import './Employees.scss';
import TitleBar from '../TitleBar';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';
import routes from '../../../constants/routes';

const columns = [
  {
    id: 'name',
    Header: 'Name',
    accessor: d => `${d.firstName} ${d.lastName || ''}` // Custom value accessors!
  }, {
    Header: 'Work Email',
    accessor: 'workEmail',
  }, {
    Header: 'Status',
    accessor: 'status'
  }];

class Employees extends Component {
  componentDidMount() {
    this.props.getEmployees(this.props.businessId);
  }

  onCreateClick = () => {
    this.props.history.push(routes.createEmployee);
  }

  render() {    
    return (
      <div className="employees">
        <TitleBar title="Manage your employees" subtitle="Add a new employee to send them a new hire box"></TitleBar>
        <div className="contain-actions">
          <span className="create-button" onClick={this.onCreateClick}>
            <span className="create-employee-text">Add Employee</span>
            <MdAddCircle />
          </span>
        </div>
        <div className="employees-table">
          <Table data={this.props.employees} columns={columns} />
        </div>
        <div className="total-row">Total Employees: {this.props.employees.length}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees.all,
    businessId: state.user.businessId
  };
}

export default connect(mapStateToProps, { getEmployees })(Employees);
