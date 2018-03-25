import React, { Component } from 'react';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import PaletteIcon from 'material-ui-icons/Palette';

import { colorBlack80 } from '../../styles/variables';
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
      <Styled.Container>
        <Styled.MainSection>
          <Styled.ImageHalf>
            <Styled.BoxImage />
          </Styled.ImageHalf>
          <Styled.CTAHalf>
            <div>
              <Styled.CTAText>
                Welcome your new hires with custom swag boxes
              </Styled.CTAText>
            </div>
            <Styled.CTAButton>
              <Button label="Get Started" href={routes.register} size="large">
                Get Started
              </Button>
            </Styled.CTAButton>
          </Styled.CTAHalf>
        </Styled.MainSection>
        <section>
          <Styled.HowTitle>How it Works</Styled.HowTitle>
          <Styled.HowContent>
            <Styled.Step>
              <div><AccountCircleIcon style={iconStyles} /></div>
              <Styled.StepTitle>Create a free account</Styled.StepTitle>
              <Styled.StepBody>
                Just click the button below and enter some basic information about your business to get the ball rolling.
              </Styled.StepBody>
            </Styled.Step>
            <Styled.Step>
              <div><PaletteIcon style={iconStyles} /></div>
              <Styled.StepTitle>Customize your box</Styled.StepTitle>
              <Styled.StepBody>
                Arm us with your brand images and our designers will create a stunning box for your new employees.
              </Styled.StepBody>
            </Styled.Step>
            <Styled.Step>
              <div><PersonAddIcon style={iconStyles} /></div>
              <Styled.StepTitle>Add a new hire</Styled.StepTitle>
              <Styled.StepBody>
                Just add a new hire’s name and email into our system, and we’ll send a custom box to their home.
              </Styled.StepBody>
            </Styled.Step>
          </Styled.HowContent>
          <Styled.HowButtonContainer>
            <Button label="Create free account" href={routes.register} size="large">
              Create free account
            </Button>
          </Styled.HowButtonContainer>
        </section>
      </Styled.Container>
    );
  }
}
