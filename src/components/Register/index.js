import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../TopBar';
import routes from '../../constants/routes';
import { isExpired } from '../../utils/jwtUtils';
import { createBusiness, checkBusinessName } from '../../actions/businessActions';
import { registerUser, checkUserEmail } from '../../actions/userActions';

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
      this.props.history.push(routes.employees); // Should be switched to dashboard once built
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userToken) {
      this.props.history.push(routes.employees); // Should be switched to dashboard once built
    } else if (!prevProps.authError && this.props.authError) {
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
        <Styled.Register>
          <Styled.Title>Register a new business account</Styled.Title>
          <Styled.FormContainer>
            <Styled.Form onSubmit={this.onFormSubmit}>
              <Input 
                label={`Business Name${this.state.businessNameError}`}
                error={this.state.businessNameError ? true : false}
                required={true}
                onChange={(e) => this.onInputTextChange('businessName', e.target.value)}
              />
              <Styled.InputContainer>
                <Input
                  label={`Email${this.state.emailError}`}
                  error={this.state.emailError ? true : false}
                  required={true}
                  onChange={(e) => this.onInputTextChange('email', e.target.value)}
                />
              </Styled.InputContainer>
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
                <Button disabled={this.state.submitting} fullWidth={true} type="submit">Register</Button>
              </Styled.ContainActions>
            </Styled.Form>
            <Styled.HaveAccount>
              Already have an account?
              <Styled.SignIn>
                <Link to={routes.signIn}>Sign In</Link>
              </Styled.SignIn>
            </Styled.HaveAccount>
          </Styled.FormContainer>
        </Styled.Register>
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

export default connect(mapStateToProps, { createBusiness, registerUser })(Register);
