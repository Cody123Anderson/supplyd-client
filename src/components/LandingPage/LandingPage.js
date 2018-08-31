import React, { Component } from 'react';
import {
  PersonAdd,
  AccountCircle,
  Palette
} from '@material-ui/icons';

import './LandingPage.scss';
import { colorBlack80 } from '../../styles/variables';
import TopBar from '../top-bar/TopBar';
import Button from '../ui-components/Button';
import routes from '../../constants/routes';
import Footer from '../Footer/Footer';
import constants from '../../constants';
import boxImage from '../../images/your-logo-box.png';

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
        <div className="landing-page">
          <div className="lp-main-section">
            <div className="lp-image-half">
              <img src={boxImage} alt="new hire box" className="lp-box-image" />
            </div>
            <div className="lp-cta-half">
              <div>
                <div className="lp-cta-text-title">Swag as a Service</div>
                <div className="lp-cta-text">
                  Get personalized clothing and products to your new hires without the hassle.
                </div>
              </div>
              <div className="lp-cta-button">
                  <Button to={routes.register} label="Get Started" size="large">
                    Get Started
                  </Button>
              </div>
            </div>
          </div>
          <section>
            <div className="lp-how-title">How it Works</div>
            <div className="lp-how-subtitle">We design, create, and deliver swag to your employees without you ever having to touch it.</div>
            <div className="lp-how-content">
              <div className="lp-step">
                <div><AccountCircle style={iconStyles} /></div>
                <div className="lp-step-title">Create a free account</div>
                <div className="lp-step-body">
                  Just click the button below to get the ball rolling.
                </div>
              </div>
              <div className="lp-step">
                <div><Palette style={iconStyles} /></div>
                <div className="lp-step-title">Select your package</div>
                <div className="lp-step-body">
                  Pick what you want your new hires to receive, and we'll design the products.
                </div>
              </div>
              <div className="lp-step">
                <div><PersonAdd style={iconStyles} /></div>
                <div className="lp-step-title">Add employees</div>
                <div className="lp-step-body">
                  Just add new hires into our system, and we’ll get the swag to their doorstep.
                </div>
              </div>
            </div>
            <div className="lp-how-button-container">
              <Button to={routes.register} label="Get started" size="large">
                Get Started
              </Button>
            </div>
          </section>
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    );
  }
}
