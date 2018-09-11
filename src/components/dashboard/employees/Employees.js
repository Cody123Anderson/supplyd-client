import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MuiButton from '@material-ui/core/Button';
import './Employees.scss';
import Button from '../../ui-components/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import TitleBar from '../TitleBar';
import routes from '../../../constants/routes';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';
import Footer from '../../Footer/Footer';
import constants from '../../../constants';
import { DOMAIN_URL } from '../../../constants/env';
import Loader from '../../ui-components/Loader';
import Slide from '@material-ui/core/Slide';

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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Employees extends Component {
  state = {
    copiedExisting: false,
    loading: true,
    modalOpen: false,
    showUrl: false,
  };

  componentDidMount() {
    this.props.getEmployees(this.props.businessId).then(() => this.setState({ loading: false }));
  }

  handleCancel = () => {
    this.setState({ modalOpen: false, showUrl: false });
  };

  handleNewHire = () => {
    this.props.history.push(routes.createEmployee);
  };

  handleExisting = () => {
    this.setState({ showUrl: true });
  };

  handleBack = () => {
    this.setState({ showUrl: false });
  };

  onCopyLink = () => {
    this.setState({ copiedExisting: true });

    setTimeout(() => {
      this.setState({ copiedExisting: false });
    }, 2000);
  };

  onCreateClick = () => {
    this.setState({ modalOpen: true });
  };

  showConfirmation = () => {
    this.setState({ open: true });
  };

  renderEmployeeTypeModal = () => {
    const { business } = this.props;

    const link = encodeURI(`${DOMAIN_URL}/swag/employee/${business.name}/${business.id}`);

    return (
      <Dialog
        TransitionComponent={Transition}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="md"
        aria-labelledby="add-new-employee-modal"
        open={this.state.modalOpen}
      >
        <DialogTitle id="add-employee-dialog-title">Add Employee</DialogTitle>
        {this.state.showUrl ? (
          <div>
            <DialogContent style={{ textAlign: 'center' }}>
              Copy the link below and send it to your existing employees. Once the employee fills
              out the form, their swag will be on its way!
              <DialogContentText style={{ marginTop: 25 }}>{link}</DialogContentText>
            </DialogContent>

            <DialogActions>
              <MuiButton onClick={this.handleCancel} color="secondary">
                Close
              </MuiButton>
              <MuiButton onClick={this.handleBack} style={{ color: '#43c59b' }}>
                Go Back
              </MuiButton>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogContent>
              <div>Which type of employee would you like to add?</div>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center', marginBottom: 30 }}>
              <Button onClick={this.handleNewHire} color="primary">
                New Hire
              </Button>
              <Button onClick={this.handleExisting} color="primary">
                Existing Employee
              </Button>
            </DialogActions>
            <DialogActions>
              <MuiButton onClick={this.handleCancel} color="secondary">
                Close
              </MuiButton>
            </DialogActions>
          </div>
        )}
      </Dialog>
    );
  };

  renderExistingLink = () => {
    const { business } = this.props;

    const link = encodeURI(`${DOMAIN_URL}/swag/employee/${business.name}/${business.id}`);

    return (
      <div>
        <DialogContent>
          Click the link below to copy it to your clipboard and send it to your existing employees.
          Once the employee fills out the form, their swag will be on its way!
        </DialogContent>
        <DialogContent>
          <div className="e-link">
            {this.state.copiedExisting ? (
              <div className="copied-text">URL copied to clipboard.</div>
            ) : (
              <CopyToClipboard text={link} onCopy={() => this.onCopyLink('copiedExisting')}>
                {link}
              </CopyToClipboard>
            )}
          </div>
        </DialogContent>
      </div>
    );
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
          {this.renderEmployeeTypeModal()}
          {!loading &&
            employees.length <= 0 && (
              <div className="employees-zero-state">
                <div className="employees-zs-text">
                  {
                    'No employees have been added to send swag to yet! Add an employee by clicking this add button.'
                  }
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
                  <Table data={employees} columns={columns} />
                </div>
                <div className="total-row">Total Employees: {employees.length}</div>
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
    business: state.business,
  };
}

export default connect(
  mapStateToProps,
  { getEmployees }
)(Employees);
