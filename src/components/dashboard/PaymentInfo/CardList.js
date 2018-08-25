import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../ui-components/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import './CardList.scss';

class CardList extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
  };

  state = { open: false };

  handleCancel = () => {
    this.setState({ open: false });
  };

  handleOk = () => {
    const card = this.props.cards[0];

    this.setState({ open: false });

    this.props.deleteCard(card);
  };

  showConfirmation = () => {
    this.setState({ open: true });
  }

  renderConfirmation = () => {
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="sm"
        aria-labelledby="confirmation-dialog-title"
        open={this.state.open}
      >
        <DialogTitle id="confirmation-dialog-title">Delete Card</DialogTitle>
        <DialogContent>
          <div>Are you sure that you want to delete this card from your account?</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="default">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    const card = this.props.cards[0];

    return (
      <div className="cl-container">
        {this.renderConfirmation()}
        <div className="cl-element">
          <div className="cl-card-brand">
            <span className="cl-bold">{card.brand}</span> ending in
            <span className="cl-bold"> {card.last4}</span>
          </div>
          <div className="cl-card-expire">
            Expiring{' '}
            <span className="cl-bold">
              {card.exp_month}/{card.exp_year}
            </span>
          </div>
        </div>
        <div className="cl-buttons">
          <Button className="cl-update-card" onClick={() => this.props.updateCard(card)}>
            Update
          </Button>
          <Button className="cl-delete-card" onClick={this.showConfirmation}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default CardList;
