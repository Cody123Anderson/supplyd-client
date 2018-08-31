import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAddCircle from 'react-icons/lib/md/add-circle';

import './Employees.scss';
import TitleBar from '../TitleBar';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';
import routes from '../../../constants/routes';
import Footer from '../../Footer/Footer';
import constants from '../../../constants';
import Loader from '../../ui-components/Loader';

const columns = [
  {
    id: 'name',
    Header: 'Name',
    accessor: d => `${d.firstName} ${d.lastName || ''}`,
  },
  {
    Header: 'Work Email',
    accessor: 'workEmail',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

class Employees extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.getEmployees(this.props.businessId);
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.employees === null && this.props.employees !== null) ||
      (this.state.loading && this.props.employees !== null)
    ) {
      this.setState({ loading: false });
    }
  }

  onCreateClick = () => {
    this.props.history.push(routes.createEmployee);
  };

  render() {
    const { employees } = this.props;
    const { loading } = this.state;

    return (
      <div className="employees">
        <div className="employees-container">
          <TitleBar
            title="Manage your employees"
            subtitle="Add a new employee to send them a new hire box"
          />
          {!loading &&
            employees.length <= 0 && (
              <div className="employees-zero-state">
                <div className="employees-zs-text">
                  {'You haven\'t added any employees to send swag to yet! Start adding employees by clicking on the add button.'}
                </div>
                <div className="contain-zero-state-actions">
                  <span className="create-button" onClick={this.onCreateClick}>
                    <MdAddCircle />
                  </span>
                </div>
              </div>
            )}
          {!loading &&
            employees.length > 0 && (
              <div>
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
            )}
          {loading && <Loader />}
        </div>
        <Footer links={constants.footerLinks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees.all,
    businessId: state.user.businessId,
  };
}

export default connect(
  mapStateToProps,
  { getEmployees }
)(Employees);
