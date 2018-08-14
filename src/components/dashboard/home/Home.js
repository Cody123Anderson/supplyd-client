import React from 'react';
import {connect} from 'react-redux';
import { CreditCard, CardGiftcard } from '@material-ui/icons';

import TitleBar from '../TitleBar';
import constants from '../../../constants';
import {setTab} from '../../../actions/tabActions';
import {getBusiness} from '../../../actions/businessActions';
import Card from '../../ui-components/Card/Card';
import Button from '../../ui-components/Button';

import './Home.scss'
import Footer from "../../Footer/Footer";
import * as Styled from "../../root/Router/DashboardRoutes/styled";

class Home extends React.Component {
  state = {
    status: 'loading'
  };

  componentDidMount() {
    this.props.setTab(constants.upperDashboardLinks.home.name);
    this.props.getBusiness(this.props.businessId)
      .then(() => this.setState({status: 'done'}));
  }

  renderStats() {
    return (
      <div>Stats</div>
    )
  }

  renderRequirements = () => (
    <div>
      <TitleBar title="Welcome to Supplyd Dashboard!"/>
      <div className="home-card-container">
        <Card className="home-card">
          <div className="home-card-header">
            Finish setting up your account to get swag to your employees
          </div>
          <div className="home-row-dark">
            <div className="home-row-left">
              <div className="home-action-icon-section">
                <CreditCard />
              </div>
              <div className="home-action-description">
                <div className="home-action-description-title">
                  Add a payment source
                </div>
                <div className="home-action-description-paragraph">
                </div>
              </div>
            </div>
            <div className="home-row-right">
              <div className="home-action-button">
                <Button to="/dashboard/paymentInfo">
                  Add Payment Info
                </Button>
              </div>
            </div>
          </div>
          <div className="home-row-light">
            <div className="home-row-left">
              <div className="home-action-icon-section">
                <CardGiftcard />
              </div>
              <div className="home-action-description">
                <div className="home-action-description-title">
                  Start sending new hire boxes!
                </div>
                <div className="home-action-description-paragraph">
                </div>
              </div>
            </div>
            <div className="home-row-right">
              <div className="home-action-button">
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Footer links={constants.footerLinks}/>
    </div>
  );

  render() {
    const {stripeId} = this.props;
    const {status} = this.state;
    switch (status) {
      case 'loading':
        return null;
      case 'done':
        if (stripeId) return this.renderStats();
        return this.renderRequirements();
      default:
        return
    }
  }
}

const mapStateToProps = (state) => ({
  businessId: state.user.businessId,
  stripeId: state.business.stripeId
});

export default connect(mapStateToProps, {setTab, getBusiness})(Home);
