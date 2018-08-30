import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import './SignIn.scss';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../top-bar/TopBar';
import routes from '../../constants/routes';
import {
  loginUser,
  clearAuthErrors
} from '../../actions/userActions';
import { isExpired } from '../../utils/jwtUtils';
import Footer from "../Footer/Footer";
import constants from "../../constants";

class SignIn extends Component {
  state = {
    password: '',
    passwordError: '',
    email: '',
    emailError: '',
    submitting: false
  }

  componentDidMount() {
    this.props.clearAuthErrors();
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

      // Log user in
      this.props.loginUser(this.state.email, this.state.password);
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

    // Validate email
    const email = this.state.email;
    if (!email) {
      error = ' - this field is required';
      this.setState({ emailError: error });
    } else {
      this.setState({ emailError: '' });
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
        <div className="si-error-text">
          {this.props.authError}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="sign-in">
          <div className="si-title">Sign in to your business account</div>
          <div className="si-form-container">
            <form className="si-form" onSubmit={this.onFormSubmit}>
              <Input
                label={`Email${this.state.emailError}`}
                error={this.state.emailError ? true : false}
                required={true}
                onChange={(e) => this.onInputTextChange('email', _.toLower(e.target.value))}
                value={this.state.email}
              />
              <div className="si-input-container">
                <Input
                  label={`Password${this.state.passwordError}`}
                  type="password"
                  error={this.state.passwordError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('password', e.target.value)}
                  value={this.state.password}
                />
              </div>
              <div className="si-contain-actions">
                {this.renderErrors()}
                <Button
                  disabled={this.state.submitting}
                  fullWidth={true}
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
            </form>
            <div className="si-need-account">
              Need an account?
              <span className="si-register">
                <Link to={routes.register}>Register</Link>
              </span>
              <div className="si-forgot-password">
                <Link to={routes.forgotPassword}>Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer links={constants.footerLinks}/>
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

export default connect(mapStateToProps, { loginUser, clearAuthErrors })(SignIn);
