import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Register.scss';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../top-bar/TopBar';
import routes from '../../constants/routes';
import { isExpired } from '../../utils/jwtUtils';
import { createBusiness, checkBusinessName } from '../../actions/businessActions';
import { registerUser, checkUserEmail } from '../../actions/userActions';
import Footer from '../Footer/Footer';
import constants from "../../constants";

class Register extends Component {
  state = {
    businessName: '',
    businessNameError: '',
    password: '',
    passwordError: '',
    email: '',
    emailError: '',
    submitting: false
  }

  componentDidMount() {
    if (this.props.userToken && !isExpired(this.props.userToken)) {
      this.props.history.push(routes.home); // Should be switched to dashboard once built
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userToken) {
      this.props.history.push(routes.home); // Should be switched to dashboard once built
    } else if (this.props.authError && prevProps.authErrorCount !== this.props.authErrorCount) {
      this.setState({ submitting: false });
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.submitting) return;

    this.setState({ submitting: true });

    this.validateForm((err) => {
      if (err) {
        return this.setState({ submitting: false });
      };

      // Create the business
      this.props.createBusiness(this.state.businessName).then(results => {
        const { id } = results.data.business;
        // Now create the user as a Super Admin for the new business
        this.props.registerUser(this.state.email, this.state.password, id, this.state.businessName);
      }).catch(err => {
        console.error('err: ', err);
        return this.setState({ submitting: false });
      });
    });
  }

  onInputTextChange = (key, value) => {
    this.setState({
      [key]: value,
      [`${key}Error`]: ''
    });
  }

  validateForm = async (cb) => {
    let error = '';

    // Validate businessName
    const businessName = this.state.businessName;
    if (!businessName) {
      error = ' - this field is required';
      this.setState({ businessNameError: error });
    } else {
      const isUnique = await checkBusinessName(businessName);

      if (!isUnique) {
        error = ' - account for this name already exists';
        this.setState({ businessNameError: error });
      } else {
        this.setState({ businessNameError: '' });
      }
    }

    // Validate email
    const email = this.state.email;
    if (!email) {
      error = ' - this field is required';
      this.setState({ emailError: error });
    } else {
      const isUnique = await checkUserEmail(email);

      if (!isUnique) {
        error = ' - account with this email already exists';
        this.setState({ emailError: error });
      } else {
        this.setState({ emailError: '' });
      }
    }

    // Validate password
    const password = this.state.password;
    if (!password) {
      error = ' - this field is required';
      this.setState({ passwordError: error });
    } else {
      this.setState({ passwordError: '' });
    }

    cb(error);
  }

  renderErrors() {
    if (this.props.authError) {
      return (
        <div className="r-error-text">
          {this.props.authError}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="register">
          <div className="r-title">Register a new business account</div>
          <div className="r-form-container">
            <form className="r-form" onSubmit={this.onFormSubmit}>
              <Input
                label={`Business Name${this.state.businessNameError}`}
                error={this.state.businessNameError ? true : false}
                required={true}
                onChange={(e) => this.onInputTextChange('businessName', e.target.value)}
                value={this.state.businessName}
              />
              <div className="r-input-container">
                <Input
                  label={`Email${this.state.emailError}`}
                  error={this.state.emailError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('email', _.toLower(e.target.value))}
                  value={this.state.email}
                />
              </div>
              <div className="r-input-container">
                <Input
                  label={`Password${this.state.passwordError}`}
                  type="password"
                  error={this.state.passwordError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('password', e.target.value)}
                  value={this.state.password}
                />
              </div>
              <div className="r-contain-actions">
                {this.renderErrors()}
                <Button disabled={this.state.submitting} fullWidth={true} type="submit">Register</Button>
              </div>
            </form>
            <div className="r-have-account">
              Already have an account?
              <span className="r-sign-in">
                <Link to={routes.signIn}>Sign In</Link>
              </span>
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
    authError: state.user.authError,
    authErrorCount: state.user.authErrorCount,
    userToken: state.user.token
  };
}

export default connect(mapStateToProps, { createBusiness, registerUser })(Register);
