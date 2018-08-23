import React from 'react';
import PropTypes from 'prop-types';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
import Button from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import v from '../../../styles/variables';

import './PaymentInfo.scss';

// stripe docs say you need inline styles for font styling
// still finding other way to style this
const stripeFontStyles = {
  base: {
    color: '#31325F',
    fontWeight: v.fontWeightLight,
    fontSize: '16px',

    '::placeholder': {
      color: '#7f7f7f ',
    },
  },
};

class PaymentForm extends React.Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired,
  };

  state = { name: '', buttonDisabled: false };

  onInputTextChange = name => {
    this.setState({ name });
  };

  submitCard = async e => {
    e.preventDefault();

    this.setState({ buttonDisabled: true });

    let { token } = await this.props.stripe.createToken({ name: this.state.name });

    if (!token) {
      this.setState({ buttonDisabled: false });
      return;
    }

    this.props.addCard(token, () => {
      this.setState({ buttonDisabled: false });
    });
  };

  render() {
    return (
      <div className="payment-form">
        <Input
          className="card-input-element"
          label="Name on card"
          error={this.state.lastNameError ? true : false}
          onChange={e => this.onInputTextChange(e.target.value)}
          value={this.state.name}
        />
        <CardNumberElement className="card-input-element" style={stripeFontStyles} />
        <CardExpiryElement className="card-input-element" style={stripeFontStyles} />
        <CardCVCElement className="card-input-element" style={stripeFontStyles} />
        <PostalCodeElement className="card-input-element" style={stripeFontStyles} />
        <Button
          className="card-input-element"
          type="submit"
          onClick={this.submitCard}
          disabled={this.state.buttonDisabled}
        >
          Add Card
        </Button>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
