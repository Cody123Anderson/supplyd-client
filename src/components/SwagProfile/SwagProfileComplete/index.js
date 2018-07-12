import React, { Component } from 'react';

import * as Styled from './styled';
import SuccessAnimation from '../../animations/SuccessAnimation';

export default class SwagProfileComplete extends Component {
  render() {
    return (
      <Styled.SwagProfileComplete>
        <SuccessAnimation />
        <Styled.SuccessTextTitle>Profile updated successfully</Styled.SuccessTextTitle>
        <Styled.SuccessTextDescription>
          Thanks! We now have all the information we need to create your swag. Your items are expected to ship in about 5 business days.
        </Styled.SuccessTextDescription>
      </Styled.SwagProfileComplete>
    );
  }
}
