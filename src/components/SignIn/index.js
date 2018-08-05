import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../TopBar';
import routes from '../../constants/routes';
import { loginUser } from '../../actions/userActions';
import { isExpired } from '../../utils/jwtUtils';

class SignIn extends Component {
  state = {
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
    } else if (!prevProps.authError && this.props.authError) {
      this.setState({ submitting: false });
    }
  }

  onFormSubmit = () => {
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
        <Styled.ErrorText>
          {this.props.authError}
        </Styled.ErrorText>
      );
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        <Styled.SignIn>
          <Styled.Title>Sign in to your business account</Styled.Title>
          <Styled.FormContainer>
            <Styled.Form onSubmit={this.onFormSubmit}>
              <Input 
                label={`Email${this.state.emailError}`} 
                error={this.state.emailError ? true : false} 
                required={true}
                onChange={(e) => this.onInputTextChange('email', _.toLower(e.target.value))}
                value={this.state.email}
              />
              <Styled.InputContainer>
                <Input 
                  label={`Password${this.state.passwordError}`}
                  type="password" 
                  error={this.state.passwordError ? true : false} 
                  required={true}
                  onChange={(e) => this.onInputTextChange('password', e.target.value)}
                  value={this.state.password}
                />
              </Styled.InputContainer>
              <Styled.ContainActions>
                {this.renderErrors()}
                <Button disabled={this.state.submitting} fullWidth={true} onClick={this.onFormSubmit}>Sign In</Button>
              </Styled.ContainActions>
            </Styled.Form>
            <Styled.NeedAccount>
              Need an account?
              <Styled.Register>
                <Link to={routes.register}>Register</Link>
              </Styled.Register>
            </Styled.NeedAccount>
          </Styled.FormContainer>
        </Styled.SignIn>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.user.authError,
    userToken: state.user.token
  };
}

export default connect(mapStateToProps, { loginUser })(SignIn);
