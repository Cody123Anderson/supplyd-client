import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './CreateEmployee.scss';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import routes from '../../../constants/routes';
import { createEmployee } from '../../../actions/employeeActions';

class CreateEmployee extends Component {
  state = {
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    workEmail: '',
    workEmailError: '',
    personalEmail: '',
    personalEmailError: '',
    phone: '',
    phoneError: '',
    serverError: '',
    submitting: false
  }

  onFormSubmit = () => {
    if (this.state.submitting) return;

    this.setState({ submitting: true });

    this.validateForm((err) => {
      if (err) {
        return this.setState({ submitting: false });
      };

      const employee = {
        businessId: this.props.user.businessId,
        businessName: this.props.user.businessName,
        firstName: this.state.firstName,
        lastName: this.state.lastName || null,
        workEmail: this.state.workEmail,
        personalEmail: this.state.personalEmail,
        phone: this.state.phone || null
      };

      // Log user in
      this.props.createEmployee(employee).then(() => {
        this.props.history.push(routes.employees);
      }).catch((err) => {
        let serverError = 'Server error adding user - please try again';

        if (_.get(err, 'status', 500) === 409) {
          serverError = 'User already exists - please see the employees page to find the user there'
        }
         
        this.setState({ submitting: false, serverError });
      });
    });
  }

  onInputTextChange = (key, value) => {
    this.setState({
      [key]: value,
      [`${key}Error`]: ''
    });
  }

  validateForm = (cb) => {    
    let error = '';

    // Validate firstName
    const firstName = this.state.firstName;
    if (!firstName) {
      error = ' - this field is required';
      this.setState({ firstNameError: error });
    } else {
      this.setState({ firstNameError: '' });
    }

    // Validate workEmail
    const workEmail = this.state.workEmail;
    if (!workEmail) {
      error = ' - this field is required';
      this.setState({ workEmailError: error });
    } else {
      this.setState({ workEmailError: '' });
    }

    // Validate personalEmail
    const personalEmail = this.state.personalEmail;
    if (!personalEmail) {
      error = ' - this field is required';
      this.setState({ personalEmailError: error });
    } else {
      this.setState({ personalEmailError: '' });
    }

    cb(error);
  }

  renderErrors() {
    if (this.state.serverError) {
      return (
        <div className="error-text">
          {this.state.serverError}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="create-employee">
          <div className="title">Add a new employee</div>
          <div className="form-container">
            <form className="form" onSubmit={this.onFormSubmit}>
              <div className="input-container">
                <Input
                  label={`First Name${this.state.firstNameError}`}
                  error={this.state.firstNameError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('firstName', e.target.value)}
                  value={this.state.firstName}
                />
              </div>
              <div className="input-container">
                <Input
                  label={`Last Name${this.state.lastNameError}`}
                  error={this.state.lastNameError ? true : false}
                  onChange={(e) => this.onInputTextChange('lastName', e.target.value)}
                  value={this.state.lastName}
                />
              </div>
              <div className="input-container">
                <Input
                  label={`Work Email${this.state.workEmailError}`}
                  error={this.state.workEmailError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('workEmail', _.toLower(e.target.value))}
                  value={this.state.workEmail}
                />
              </div>    
              <div className="input-container">
                <Input 
                  label={`Personal Email${this.state.personalEmailError}`} 
                  helperText={'this allows us to contact the new employee before they start using their work email'}
                  error={this.state.personalEmailError ? true : false} 
                  required={true}
                  onChange={(e) => this.onInputTextChange('personalEmail', _.toLower(e.target.value))}
                  value={this.state.personalEmail}
                />
              </div>
              <div className="input-container">
                <Input
                  label={`Phone${this.state.phoneError}`}
                  helperText={'this is the most successful method of contacting employees'}
                  error={this.state.phoneError ? true : false}
                  onChange={(e) => this.onInputTextChange('phone', e.target.value)}
                  value={this.state.phone}
                />
              </div>
              <div className="container-actions">
                {this.renderErrors()}
                <Button disabled={this.state.submitting} fullWidth={true} onClick={this.onFormSubmit}>Add Employee</Button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employee: state.employees.current,
    createEmployeeError: state.employees.createEmployeeError,
    user: state.user
  };
}

export default connect(mapStateToProps, { createEmployee })(CreateEmployee);
