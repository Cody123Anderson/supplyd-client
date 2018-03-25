import React, { Component } from 'react';

import * as Styled from './styled';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';

export default class Register extends Component {
  render() {
    return (
      <Styled.Register>
        <Styled.Title>Create a New Account</Styled.Title>
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
        </Styled.FormContainer>
      </Styled.Register>
    );
  }
}
