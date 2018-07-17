import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../TopBar';
import routes from '../../constants/routes';
import { loginUser } from '../../actions/userActions';

class SignIn extends Component {
  state = {
    password: '',
    passwordError: '',
    email: '',
    emailError: ''
  }

  componentDidUpdate() {
    if (this.props.userToken) {
      this.props.history.push(routes.employees); // Should be switched to dashboard once built
    }
  }

  onFormSubmit = () => {
    this.validateForm((err) => {
      if (err) return;

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
      this.setState({ usernameError: '' });
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
                onChange={(e) => this.onInputTextChange('email', e.target.value)}
              />
              <Styled.InputContainer>
                <Input 
                  label={`Password${this.state.passwordError}`}
                  type="password" 
                  error={this.state.passwordError ? true : false} 
                  required={true}
                  onChange={(e) => this.onInputTextChange('password', e.target.value)}
                />
              </Styled.InputContainer>
              <Styled.ContainActions>
                {this.renderErrors()}
                <Button fullWidth={true} onClick={this.onFormSubmit}>Sign In</Button>
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
