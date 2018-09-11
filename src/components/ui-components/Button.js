import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import _ from 'lodash';

import './Button.scss';
import Loader from './Loader';

export default class _Button extends PureComponent {
  static propTypes = {
    href: PropTypes.string, // Force rerender of new page
    loading: PropTypes.bool.isRequired,
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
    loading: false,
    size: 'medium'
  }

  render() {
    const { to } = this.props;
    const btn = (
      <Button {..._.omit(this.props, ['loading'])}>
        {
          this.props.loading &&
            <Loader
              classes={this.props.classes}
              size={20}
              margin={0}
              color="inherit"
            />
        }
        { !this.props.loading && this.props.children }
      </Button>
    );

    return (
      <div className="button">
        { to && <Link to={to}>{btn}</Link> }
        { !to && btn }
      </div>
    );
  }
}
