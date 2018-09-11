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
import blueBoxImage from '../../images/your-logo-box-blue.png';
import whiteBoxImage from '../../images/your-logo-box-white.png';

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
          <section className="lp-section">
            <div id="howitworks" className="lp-section-title">How it Works</div>
            <div className="lp-section-subtitle">We design, create, and deliver swag to your employees without you ever having to touch it.</div>
            <div className="lp-section-content">
              <div className="lp-section-col">
                <div><AccountCircle style={iconStyles} /></div>
                <div className="lp-col-title">Create a free account</div>
                <div className="lp-col-body">
                  Just click the button below to get the ball rolling.
                </div>
              </div>
              <div className="lp-section-col">
                <div><Palette style={iconStyles} /></div>
                <div className="lp-col-title">Select your package</div>
                <div className="lp-col-body">
                  Pick what you want your new hires to receive, and we'll design the products.
                </div>
              </div>
              <div className="lp-section-col">
                <div><PersonAdd style={iconStyles} /></div>
                <div className="lp-col-title">Add employees</div>
                <div className="lp-col-body">
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
          <section className="lp-section lp-section-dark">
            <div id="pricing" className="lp-section-title">Pricing</div>
            <div className="lp-section-subtitle">All box pricing includes tax and US domestic shipping</div>
              <div className="lp-section-content">
                <div className="lp-section-col">
                  <img src={boxImage} alt="The basic box" className="lp-price-box lp-price-box-basic" />
                  <div className="lp-col-title">The Basic</div>
                  <div className="lp-col-pricing">$89</div>
                  <div className="lp-col-body">
                    <ul className="lp-swag-list">
                      <li>Custom designed box</li>
                      <li>Crinkle cut filler</li>
                      <li>Welcome insert</li>
                      <li>Next Level Tee</li>
                      <li>Adjustable hat (snapback or dad hat)</li>
                      <li>2 Stickermule die cut stickers</li>
                      <li>Yowie 18oz. Tumbler Cup</li>
                    </ul>
                  </div>
                </div>
                <div className="lp-section-col">
                  <img src={blueBoxImage} alt="The standard box" className="lp-price-box lp-price-box-standard" />
                  <div className="lp-col-title">The Standard</div>
                  <div className="lp-col-pricing">$129</div>
                  <div className="lp-col-body">
                    <ul className="lp-swag-list">
                      <li>Custom designed box</li>
                      <li>Crinkle cut filler</li>
                      <li>Welcome insert</li>
                      <li>Next Level Tee</li>
                      <li>Adjustable hat (snapback or dad hat)</li>
                      <li>2 Stickermule die cut stickers</li>
                      <li>Yowie 18oz. Tumbler Cup</li>
                      <li className="lp-added">2nd Next Level Tee</li>
                      <li className="lp-added">Notebook</li>
                      <li className="lp-added">2 Premium Pens</li>
                    </ul>
                  </div>
                </div>
                <div className="lp-section-col">
                  <img src={whiteBoxImage} alt="The premium box" className="lp-price-box lp-price-box-premium" />
                  <div className="lp-col-title">The Premium</div>
                  <div className="lp-col-pricing">$249</div>
                  <div className="lp-col-body">
                    <ul className="lp-swag-list">
                      <li>Custom designed box</li>
                      <li>Crinkle cut filler</li>
                      <li>Welcome insert</li>
                      <li>Next Level Tee</li>
                      <li>Adjustable hat (snapback or dad hat)</li>
                      <li>2 Stickermule die cut stickers</li>
                      <li>Yowie 18oz. Tumbler Cup</li>
                      <li>2nd Next Level Tee</li>
                      <li>Notebook</li>
                      <li>2 Premium Pens</li>
                      <li className="lp-added">Hoodie</li>
                      <li className="lp-added">Backpack</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lp-section-subtitle">
                Want to customize your own box? Email us at <a href="mailto:sales@supplyd.io">sales@supplyd.io</a>
              </div>
            </section>
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    );
  }
}
