import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MdAddCircle from 'react-icons/lib/md/add-circle';

import './Employees.scss';
import TitleBar from '../TitleBar';
import routes from '../../../constants/routes';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';
import Footer from '../../Footer/Footer';
import constants from '../../../constants';
import { DOMAIN_URL } from '../../../constants/env';
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
  state = { copiedNew: false, copiedExisting: false, loading: true };

  componentDidMount() {
    this.props.getEmployees(this.props.businessId).then(() => this.setState({ loading: false }));
  }

  addExistingEmployeeUrl = () => {
    const { business } = this.props;

    return encodeURI(`${DOMAIN_URL}/swag/employee/${business.name}/${business.id}`);
  };

  onCopyLink = copiedUrl => {
    this.setState({ [copiedUrl]: true });

    setTimeout(() => {
      this.setState({ [copiedUrl]: false });
    }, 2000);
  };

  onCreateClick = () => {
    this.props.history.push(routes.createEmployee);
  };

  render() {
    const { employees } = this.props;
    const { loading } = this.state;

    const existingEmployeeURL = this.addExistingEmployeeUrl();

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
                  {
                    'No employees have been added to send swag to yet! Add a new hire by clicking this add button.'
                  }
                </div>
                <div className="contain-zero-state-actions">
                  <span className="create-button" onClick={this.onCreateClick}>
                    <MdAddCircle />
                  </span>
                </div>
                <div className="employees-zs-text">
                  {'Or copy the link in the section below and send it to your existing employees.'}
                </div>
              </div>
            )}
          {!loading &&
            employees.length > 0 && (
              <div>
                <div className="contain-actions">
                  <span className="create-button" onClick={this.onCreateClick}>
                    <span className="create-employee-text">Add a New Hire</span>
                    <MdAddCircle />
                  </span>
                </div>
                <div className="employees-table">
                  <Table data={employees} columns={columns} />
                </div>
                <div className="total-row">Total Employees: {employees.length}</div>
              </div>
            )}
          {loading && <Loader />}
          <div className="employees-links-container">
            <div className="e-links-header">
              Copy the link below and send it to your existing employees. Once the employee fills
              out the form, their swag will be on its way!
            </div>
            <div className="employees-links">
              <div className="e-link">
                {this.state.copiedExisting ? (
                  <div className="copied-text">URL copied to clipboard.</div>
                ) : (
                  <CopyToClipboard
                    text={existingEmployeeURL}
                    onCopy={() => this.onCopyLink('copiedExisting')}
                  >
                    <div>
                      <span id="e-link-description">Existing Employees:</span> {existingEmployeeURL}
                    </div>
                  </CopyToClipboard>
                )}
              </div>
            </div>
          </div>
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
    business: state.business,
  };
}

export default connect(
  mapStateToProps,
  { getEmployees }
)(Employees);
