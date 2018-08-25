import React, { Component } from 'react';
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

class PaymentForm extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired,
    isCardUpdate: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    isCardUpdate: false,
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

  renderButtons = () => {
    if (this.props.isCardUpdate) {
      return (
        <div className="card-update-buttons">
          <Button
            className="card-update-button"
            type="submit"
            onClick={this.submitCard}
            disabled={this.state.buttonDisabled}
          >
            Update
          </Button>
          <Button
            className="card-cancel-button"
            onClick={this.props.cancelUpdate}
            disabled={this.state.buttonDisabled}
          >
            Cancel
          </Button>
        </div>
      );
    }

    return (
      <div>
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
        {this.renderButtons()}
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
