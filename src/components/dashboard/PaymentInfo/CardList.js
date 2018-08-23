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

import './PaymentInfo.scss';

// stripe docs say you need inline styles for font styling
// still finding other way to style this
const stripeFontStyles = {
  base: {
      color: '#31325F',
      fontWeight: 200,
      fontSize: '16px',

      '::placeholder': {
          color: '#7f7f7f ',
      }
  }
};

class PaymentForm extends React.Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  }

  state = { name: '' };

  onInputTextChange = name => {
    this.setState({ name });
  };

  submitCard = async () => {
    let { token } = await this.props.stripe.createToken({ name: this.state.name });

    console.log(token)

    this.props.addCard(token);
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
        <Button className="card-input-element" onClick={this.submitCard}>Add Card</Button>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
