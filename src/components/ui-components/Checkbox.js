import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export default class MyCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChange = () => {
    this.props.onChange(!this.props.checked);
  }

  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.props.checked}
            onChange={this.handleChange}
            color="primary"
          />
        }
        label={this.props.label}
      />
    );
  }
}
