import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MuiButton from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Employees.scss';
import Button from '../../ui-components/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import TitleBar from '../TitleBar';
import routes from '../../../constants/routes';
import Table from '../../ui-components/Table';
import { getEmployees } from '../../../actions/employeeActions';
import Footer from '../../Footer/Footer';
import constants from '../../../constants';
import { DOMAIN_URL } from '../../../constants/env';
import Loader from '../../ui-components/Loader';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: '#777',

        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },
  },
});

const closebtnStyles = {
  float: 'right',
  marginRight: 20,
  marginTop: -45,
  fill: '#777',
  cursor: 'pointer',
};

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

  handleClose = () => {
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
        fullWidth
        maxWidth="md"
        PaperProps={{style: {margin: 15}}}
        aria-labelledby="add-new-employee-modal"
        open={this.state.modalOpen}
      >
        <div>
          <DialogTitle id="add-employee-dialog-title">
            <div>Add Employee</div>
          </DialogTitle>
          <Close onClick={this.handleClose} style={closebtnStyles} />
        </div>
        {this.state.showUrl ? (
          <div>
            <DialogContent style={{ textAlign: 'center' }}>
              Copy the link below and send it to your existing employees. Once the employee fills
              out the form, their swag will be on its way!
              <DialogContentText style={{ marginTop: 25 }}>{link}</DialogContentText>
            </DialogContent>

            <DialogActions>
              <MuiThemeProvider theme={theme}>
                <MuiButton onClick={this.handleBack}>
                  Go Back
                </MuiButton>
              </MuiThemeProvider>
              <Button onClick={this.handleClose} color="primary">
                Done
              </Button>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogContent style={{ textAlign: 'center', fontSize: 18 }}>
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
          </div>
        )}
      </Dialog>
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
