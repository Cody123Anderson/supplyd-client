import React, { Component } from 'react';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import TopBar from '../TopBar';

export default class Register extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Styled.SignIn>
          <Styled.Title>Sign In to Your Account</Styled.Title>
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
          </Styled.FormContainer>
        </Styled.SignIn>
      </div>
    );
  }
}
