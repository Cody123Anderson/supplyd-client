import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import {
  colorPrimary,
  colorWhite,
  fontSizeMedium,
  fontWeightLight
} from '../../../styles/variables';

export default class PrimaryButton extends PureComponent {
  static propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    return (
      <RaisedButton
        backgroundColor={colorPrimary}
        className="primary-button"
        href={this.props.href}
        label={this.props.label}
        labelColor={colorWhite}
        labelStyle={{
          fontWeight: fontWeightLight,
          fontSize: fontSizeMedium
        }}
        onClick={this.props.onClick}
        buttonStyle={{
          height: '40px',
          lineHeight: '41px'
        }}
      />
    );
  }
}
