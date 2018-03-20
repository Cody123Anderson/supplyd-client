import React, { Component } from 'react';
import PersonAddIcon from 'material-ui/svg-icons/social/person-add';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import PaletteIcon from 'material-ui/svg-icons/image/palette';

import './LandingPage.scss';
import { colorBlack80 } from '../../styles/variables';
import PrimaryButton from '../ui-components/buttons/PrimaryButton';

const iconStyles = {
  color: colorBlack80,
  height: '75px',
  marginBottom: '10px',
  width: '75px'
};

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <section className="lp-main-section">
          <div className="lp-image-half">
            <div className="lp-image" />
          </div>
          <div className="lp-cta-half">
            <div>
              <div className="lp-cta-text">
                Welcome your new hires with custom swag boxes
              </div>
            </div>
            <div className="lp-cta-btn">
              <PrimaryButton label="Get Started" />
            </div>
          </div>
        </section>
        <section className="lp-how-it-works">
          <div className="lp-hiw-title">How it Works</div>
          <div className="lp-hiw-contents">
            <div className="lp-hiw-step">
              <div><AccountCircleIcon style={iconStyles} /></div>
              <div className="lp-hiw-step-title">Create a free account</div>
              <div className="lp-hiw-step-body">
                Just click the button below and enter some basic information about your business to get the ball rolling.
              </div>
            </div>
            <div className="lp-hiw-step">
              <div><PaletteIcon style={iconStyles} /></div>
              <div className="lp-hiw-step-title">Customize your box</div>
              <div className="lp-hiw-step-body">
                Armed with your brand images, our designers will create a stunning box for your new employees.
              </div>
            </div>
            <div className="lp-hiw-step">
              <div><PersonAddIcon style={iconStyles} /></div>
              <div className="lp-hiw-step-title">Add a new hire</div>
              <div className="lp-hiw-step-body">
                Just add a new hire’s name and email into our system and we’ll get their sizes, get their address, and send a custom box to their home.
              </div>
            </div>
          </div>
          <div className="lp-hiw-cta">
            <PrimaryButton label="Create free account" />
          </div>
        </section>
      </div>
    );
  }
}
