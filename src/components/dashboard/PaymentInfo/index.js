import React from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { REACT_APP_STRIPE_API_KEY } from '../../../constants/env';
import { setTab } from '../../../actions/tabActions';
import { createStripeCustomer } from '../../../actions/businessActions';
import constants from '../../../constants';
import Footer from '../../Footer/Footer';
import PaymentForm from './PaymentForm';
import TitleBar from '../TitleBar';

import './PaymentInfo.scss';

class PaymentInfo extends React.Component {
  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.paymentInfo.name);
  }

  cardAdded = async (cardInfo, cb) => {
    await this.props.createStripeCustomer(cardInfo, this.props.user)
    return cb();
  }

  render() {
    return (
      <div>
        <div className="payment-info-container">
          <TitleBar
            title="Manage Payment Information"
            subtitle="Add a credit/debit card to your account to start placing orders"
          />
          <StripeProvider apiKey={REACT_APP_STRIPE_API_KEY}>
            <Elements>
              <PaymentForm addCard={this.cardAdded}/>
            </Elements>
          </StripeProvider>
        </div>
        <Footer links={constants.footerLinks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { createStripeCustomer, setTab }
)(PaymentInfo);
