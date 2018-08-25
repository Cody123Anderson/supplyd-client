import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { REACT_APP_STRIPE_API_KEY } from '../../../constants/env';
import { setTab } from '../../../actions/tabActions';
import {
  createStripeCustomer,
  deleteCreditCard,
  updateCreditCard,
} from '../../../actions/businessActions';
import constants from '../../../constants';
import Footer from '../../Footer/Footer';
import PaymentForm from './PaymentForm';
import CardList from './CardList';
import TitleBar from '../TitleBar';

import './PaymentInfo.scss';

class PaymentInfo extends Component {
  state = { updateCard: false };

  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.paymentInfo.name);
  }

  updateCardToggle = () => {
    this.setState(prevState => {
      return {
        updateCard: !prevState.updateCard,
      };
    });
  };

  deleteCard = async card => {
    await this.props.deleteCreditCard(this.props.user.stripeId, card.id);
  };

  cardAdded = async (cardInfo, cb) => {
    if (!this.props.business.stripeId) {
      await this.props.createStripeCustomer(cardInfo, this.props.user);
    } else {
      await this.props.updateCreditCard(cardInfo, this.props.user);
    }
    cb();
    this.updateCardToggle()
    return;
  };

  renderAddFirstCard = business => {
    if (business.cards.length === 0 || this.state.updateCard) {
      return (
        <div>
          <StripeProvider apiKey={REACT_APP_STRIPE_API_KEY}>
            <Elements>
              <PaymentForm
                addCard={this.cardAdded}
                isCardUpdate={this.state.updateCard}
                cancelUpdate={this.updateCardToggle}
              />
            </Elements>
          </StripeProvider>
        </div>
      );
    }
    return <div />;
  };

  renderCardList = cardsArray => {
    if (cardsArray.length > 0 && !this.state.updateCard) {
      return (
        <div>
          <CardList
            cards={cardsArray}
            updateCard={this.updateCardToggle}
            deleteCard={this.deleteCard}
          />
        </div>
      );
    }
    return <div />;
  };

  render() {
    const { business } = this.props;

    console.log('STATE: ', this.state, business);
    return (
      <div>
        <div className="payment-info-container">
          <TitleBar
            title="Manage Payment Information"
            subtitle="Add, edit, or delete a card on your account"
          />
          {this.renderAddFirstCard(business)}
          {this.renderCardList(business.cards)}
        </div>
        <Footer links={constants.footerLinks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.business,
    user: state.user,
  };
}

export default connect(
  mapStateToProps,
  { createStripeCustomer, deleteCreditCard, setTab, updateCreditCard }
)(PaymentInfo);
