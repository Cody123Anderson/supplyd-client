import React, { Component } from 'react';
import {
  PersonAdd,
  AccountCircle,
  Palette
} from '@material-ui/icons';

import { colorBlack80 } from '../../styles/variables';
import TopBar from '../TopBar';
import Button from '../ui-components/Button';
import routes from '../../constants/routes';
import Styled from './styled';

const iconStyles = {
  color: colorBlack80,
  height: '75px',
  marginBottom: '10px',
  width: '75px'
};

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Styled.Container>
          <Styled.MainSection>
            <Styled.ImageHalf>
              <Styled.BoxImage />
            </Styled.ImageHalf>
            <Styled.CTAHalf>
              <div>
                <Styled.CTATextTitle>Swag as a Service</Styled.CTATextTitle>
                <Styled.CTAText>
                  Get beautifully designed branded clothing and products to your employees without the hassle.
                </Styled.CTAText>
              </div>
              <Styled.CTAButton>
                  <Button to={routes.register} label="Get Started" size="large">
                    Get Started
                  </Button>
              </Styled.CTAButton>
            </Styled.CTAHalf>
          </Styled.MainSection>
          <section>
            <Styled.HowTitle>How it Works</Styled.HowTitle>
            <Styled.HowContent>
              <Styled.Step>
                <div><AccountCircle style={iconStyles} /></div>
                <Styled.StepTitle>Create a free account</Styled.StepTitle>
                <Styled.StepBody>
                  Just click the button below and enter some basic information about your business to get the ball rolling.
                </Styled.StepBody>
              </Styled.Step>
              <Styled.Step>
                <div><Palette style={iconStyles} /></div>
                <Styled.StepTitle>Customize your swag</Styled.StepTitle>
                <Styled.StepBody>
                  Pick the items and designs you want us to create, and we'll get them prepared for your employees.
                </Styled.StepBody>
              </Styled.Step>
              <Styled.Step>
                <div><PersonAdd style={iconStyles} /></div>
                <Styled.StepTitle>Add employees</Styled.StepTitle>
                <Styled.StepBody>
                  Just add an employee’s email into our system, and we’ll send custom swag to their home or office in a beautiful box. We even get their sizes so you don't have to.
                </Styled.StepBody>
              </Styled.Step>
            </Styled.HowContent>
            <Styled.HowButtonContainer>
              <Button to={routes.register} label="Create Free Account" size="large">
                Create Free Account
              </Button>
            </Styled.HowButtonContainer>
          </section>
        </Styled.Container>
      </div>
    );
  }
}
