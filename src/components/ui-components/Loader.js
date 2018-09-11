import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import v from '../../styles/variables';

export default class Loader extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    margin: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired
  };

  static defaultProps = {
    color: v.colorPrimary,
    margin: 16,
    size: 50
  }

  render() {
    const style = {
      color: this.props.color,
      margin: this.props.margin
    };

    return (
      <CircularProgress
        size={this.props.size}
        style={style}
      />
    );
  }
}
