import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export default class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    fullWidth: true
  };

  render() {

    return (
      <TextField
        aria-label={this.props.label}
        fullWidth={this.props.fullWidth}
        {...this.props}
      />
    );
  }
}
