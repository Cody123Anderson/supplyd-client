import glamorous from 'glamorous';

import v from '../../styles/variables';

export const SwagProfile = glamorous.div({
  display: 'inline-block',
  textAlign: 'center',
  marginTop: '50px',
  maxWidth: '800px'
}, 'SwagProfile');

export const Title = glamorous.div({
  fontSize: v.fontSizeLarge,
  fontWeight: v.fontWeightBold,
  marginBottom: '10px',
  padding: '3px 15px',
  textAlign: 'center',
}, 'Title')

export const SubTitle = glamorous.div({
  marginBottom: '30px',
  padding: '3px 15px',
  textAlign: 'center',
}, 'SubTitle')

export const Form = glamorous.div({
}, 'Form');

export const FormField = glamorous.div({
  margin: '50px 0 0'
}, 'FormField')

export const Label = glamorous.div({
  backgroundColor: v.colorBlack80,
  borderRadius: v.borderRadius,
  color: v.colorWhite,
  display: 'inline-block',
  fontSize: v.fontSizeMedium,
  margin: '10px 0',
  padding: '3px 15px'
}, 'Label');

export const ContainInput = glamorous.div({
  marginTop: '20px',
  padding: '0 3px'
}, 'ContainInput')

