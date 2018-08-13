import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

import v from '../../../styles/variables';

export const MobileNav = glamorous.div({
  '@media (min-width: 1000px)': {
    display: 'none',
  }
}, 'MobileNav');

export const NavLink = glamorous(Link)(
  {
    color: v.colorWhite,
    width: '100%',
    height: '100%',

    '&:hover': {
      color: v.colorWhite,
    },
  },
  'NavLink'
);

export const SignOut = glamorous.div(
  {
    fontSize: 14,
    color: v.colorWhite,
    marginLeft: 16,
    marginBottom: 10,
    cursor: 'pointer',
    width: 'max-content',
    '&:focus': {
      outline: 'none',
    },
  },
  'SignOut'
);

export const Divider = glamorous.div(
  {
    margin: '15px 0',
    width: 220,
    borderBottom: `1px solid #ffffff`,
  },
  'Divider'
);
