import glamorous from 'glamorous';

import v from '../../styles/variables';

export const SwagProfile = glamorous.div({
  textAlign: 'center',
  marginTop: '50px',
}, 'SwagProfile');

export const Title = glamorous.div({
  fontSize: v.fontSizeLarge,
  marginBottom: '10px',
  textAlign: 'center',
}, 'Title')

export const SubTitle = glamorous.div({
  marginBottom: '30px',
  textAlign: 'center',
}, 'SubTitle')

export const FormField = glamorous.div({
  margin: '10px 0',
  textAlign: 'left',
}, 'FormField')

export const Label = glamorous.div({
  margin: '10px 0',
}, 'Label')

