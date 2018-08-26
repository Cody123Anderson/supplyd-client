import React from 'react';

import { requestPasswordChange } from '../../actions/userActions';
import Input from '../ui-components/Input';
import Button from "../ui-components/Button";

import routes from '../../constants/routes';

import './ForgotPassword.scss';

const START = 'START';
const COMPLETE = 'COMPLETE';
const ERROR = 'ERROR';

const initialState = {
  request: START,
  email: '',
  error: false,
};

class ForgotPassword extends React.Component {
  state = { ...initialState };

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.length) {
      this.setState({ error: true, errorMessage: '- Can not be empty'});
      return false;
    } else if (!emailRegex.test(email)) {
      this.setState({ error: true, errorMessage: '- Must be a valid email' });
      return false;
    } else {
      this.setState({ error: false });
      return true;
    }
  }

  submitPasswordChangeRequest = (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (this.validateEmail(email)) {
      requestPasswordChange(email)
        .then(() => this.setState({ request: COMPLETE }))
        .catch(() => this.setState({ request: ERROR }));
    }
  };

  handleEmail = (e) => this.setState({
    email: e.target.value,
    error: false
  });

  renderContent() {
    const { error, errorMessage, request } = this.state;
    switch (request) {
      case START:
        return (
          <form
            className="forgot-password-form"
            onSubmit={this.submitPasswordChangeRequest}>
            <h1>Reset your Supplyd Password</h1>
            <p>Submit your email address and we will send you a link to reset your password</p>
            <Input
              error={error}
              required={true}
              onChange={this.handleEmail}
              label={`Email Address ${error ? errorMessage: ''}`}
              fullWidth={false}/>
            <hr/>
            <Button
              type="submit">
              Submit
            </Button>
          </form>
        );
      case COMPLETE:
        return (
          <div className="forgot-password-form">
            <h1>Help is on the way! Check your email</h1>
            <a href={routes.signIn}>Return to sign-in page</a>
          </div>
        );
      case ERROR:
        return (
          <div className="forgot-password-form">
            <p>There was an error processing your request. Try Again later!</p>
            <a href={routes.signIn}>Return to sign-in page</a>
          </div>
        );
      default:
        return null;
    }

  }

  render() {
    return (
      <div className="forgot-password-container">
        {this.renderContent()}
      </div>
    );
  }
}

export default ForgotPassword;
