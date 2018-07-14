import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../TopBar';
import routes from '../../constants/routes';

export default class Register extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Styled.Register>
          <Styled.Title>Register a new business account</Styled.Title>
          <Styled.FormContainer>
            <Styled.Form>
              <Input label="Business Name" />
              <Styled.InputContainer>
                <Input label="Email" />
              </Styled.InputContainer>
              <Styled.InputContainer>
                <Input label="Password" type="password" />
              </Styled.InputContainer>
              <Styled.ContainActions>
                <Button fullWidth={true}>Register</Button>
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
