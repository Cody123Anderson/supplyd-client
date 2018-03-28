import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

export default class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }

  render() {

    return (
      <TextField
        aria-label={this.props.label}
        fullWidth={true}
        {...this.props}
      />
    );
  }
}
