import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledButton } from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    ...StyledButton.propTypes,
    href: PropTypes.string, // Force rerender of new page
    to: PropTypes.string, // pushState redirect (ideal!)
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
    const { to, ...props } = this.props;

    const btn = <StyledButton {...props}>{this.props.children}</StyledButton>;

    return (
      <div>
        { to && <Link to={to}>{btn}</Link> }
        { !this.props.to && btn }
      </div>
    );
  }
}
