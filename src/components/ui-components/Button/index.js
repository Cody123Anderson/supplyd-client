import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    ...StyledButton.propTypes,
    href: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string
  }

  static defaultProps = {
    ...StyledButton.defaultProps,
    variant: 'raised',
    color: 'primary',
    classes: {
      raisedPrimary: 'supplyd-raisedPrimary',
      raisedSecondary: 'supplyd-raisedSecondary',
      flatPrimary: 'supplyd-flatPrimary',
      flatSecondary: 'supplyd-flatSecondary',
    },
    size: 'medium'
  }

  render() {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}
