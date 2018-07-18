import glamorous from 'glamorous';

import v from '../../styles/variables';

export const Employees = glamorous.div({
  textAlign: 'center',
}, 'Employees');

export const Title = glamorous.div({
  display: 'block',
  fontSize: v.fontSizeLarge,
  marginBottom: '30px',
  textAlign: 'center',
  width: '100%'
}, 'Title')
