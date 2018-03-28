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
              <Styled.CTATextTitle>Swag as a Service</Styled.CTATextTitle>
              <Styled.CTAText>
                Get branded clothes (a.k.a. swag) to your employees and customers without worrying about getting their sizes, designing the clothes, ordering the right amount, or handing them out.
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
              <div><AccountCircleIcon style={iconStyles} /></div>
              <Styled.StepTitle>Create a free account</Styled.StepTitle>
              <Styled.StepBody>
                Just click the button below and enter some basic information about your business to get the ball rolling.
              </Styled.StepBody>
            </Styled.Step>
            <Styled.Step>
              <div><PaletteIcon style={iconStyles} /></div>
              <Styled.StepTitle>Upload your art</Styled.StepTitle>
              <Styled.StepBody>
                Arm us with your brand images, and our designers will create custom swag for your employees (approved by you of course). You can also have your designers send us specific designs.
              </Styled.StepBody>
            </Styled.Step>
            <Styled.Step>
              <div><PersonAddIcon style={iconStyles} /></div>
              <Styled.StepTitle>Add a new hire</Styled.StepTitle>
              <Styled.StepBody>
                Just add a new hire’s email into our system, and we’ll send custom swag to their home in a beautiful box. Then, you can send them more swag at the touch of a button anytime you'd like.
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
    );
  }
}
