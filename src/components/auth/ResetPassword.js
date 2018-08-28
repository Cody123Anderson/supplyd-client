import React from 'react';
import qs from 'querystringify';
import Input from "../ui-components/Input";
import Button from "../ui-components/Button";

import routes from '../../constants/routes';
import { resetPassword } from '../../actions/userActions';

import './ResetPassword.scss';

const START = 'START';
const COMPLETE = 'COMPLETE';
const ERROR = 'ERROR';
const initialState = {
  request: START,
  error: false,
  errorMessage: null,
  token: null,
  id: null,
  firstPassword: '',
  secondPassword: ''
};

class ResetPassword extends React.Component {
  state = { ...initialState };

  handleFirstPassword = (e) => this.setState({
    firstPassword: e.target.value,
    error: false
  });

  handleSecondPassword = (e) => this.setState({
    secondPassword: e.target.value,
    error: false
  });

  validatePasswords() {
    const { firstPassword, secondPassword } = this.state;
    if (!firstPassword.length && firstPassword === secondPassword) {
      this.setState({
        error: true,
        errorMessage: 'Passwords can not be blank'
      });
    } else if (firstPassword !== secondPassword){
      this.setState({
        error: true,
        errorMessage: 'Passwords are different'
      });
      return false;
    } else {
      return true;
    }
  }

  submitPasswordChange = (e) => {
    e.preventDefault();
    const { secondPassword, id, token } = this.state;
    if (this.validatePasswords()) {
      resetPassword(secondPassword, id, token)
        .then(() => this.setState({ request: COMPLETE }))
        .catch((err) => this.setState({
          request: ERROR,
          errorMessage: err.response.data.statusText
        }));
    }
  };

  renderError() {
    const { error, errorMessage } = this.state;
    return error
      ? <div className="reset-password-error">{errorMessage}</div>
      : null
  }

  renderContent() {
    const { request, error, errorMessage } = this.state;
    switch (request) {
      case START:
        return (
          <form
            className="reset-password-form"
            onSubmit={this.submitPasswordChange}>
            <h1>Reset your Supplyd Password</h1>
            <Input
              type="password"
              required={true}
              label="New Password"
              fullWidth={false}
              onChange={this.handleFirstPassword}/>
            <hr/>
            <Input
              type="password"
              error={error}
              required={true}
              label={'New Password (again)'}
              fullWidth={false}
              onChange={this.handleSecondPassword}
            />
            {this.renderError()}
            <hr/>
            <Button
              type="submit">
              Submit
            </Button>
          </form>
        );
      case COMPLETE:
        return (
          <div className="reset-password-form">
            <h1>Your password has been reset!</h1>
            <a href={routes.signIn}>Return to sign-in page</a>
          </div>
        );
      case ERROR:
        return (
          <div className="reset-password-form">
            <p>{errorMessage}</p>
            <a href={routes.signIn}>Return to sign-in page</a>
          </div>
        );
      default:
        return null;
    }
  }

  componentDidMount() {
    const { token, id } = qs.parse(this.props.location.search);
    this.setState({ token, id });
  }

  render() {
    return (
      <div className="reset-password-container">
        {this.renderContent()}
      </div>
    )
  }
}

export default ResetPassword;
