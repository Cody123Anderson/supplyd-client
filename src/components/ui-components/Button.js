import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Button.scss';

export default class _Button extends PureComponent {
  static propTypes = {
    href: PropTypes.string, // Force rerender of new page
    to: PropTypes.string, // pushState redirect (ideal!)
    onClick: PropTypes.func,
    size: PropTypes.string
  }

  static defaultProps = {
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

    const btn = <Button {...props}>{this.props.children}</Button>;

    return (
      <div className="button">
        { to && <Link to={to}>{btn}</Link> }
        { !this.props.to && btn }
      </div>
    );
  }
}
