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
        <Styled.SignIn>
          <Styled.Title>Sign in to your business account</Styled.Title>
          <Styled.FormContainer>
            <Styled.Form>
              <Input label="Email" />
              <Styled.InputContainer>
                <Input label="Password" type="password" />
              </Styled.InputContainer>
              <Styled.ContainActions>
                <Button fullWidth={true}>Sign In</Button>
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
