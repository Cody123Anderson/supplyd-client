import glamorous from 'glamorous';

import v from '../../styles/variables';

export const Register = glamorous.div({
  textAlign: 'center',
  marginTop: '50px',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    marginTop: '80px'
  }
}, 'Register');

export const Title = glamorous.div({
  display: 'block',
  fontSize: v.fontSizeXlarge,
  marginBottom: '30px',
  textAlign: 'center',
  width: '100%'
}, 'Title')

export const FormContainer = glamorous.div({
  display: 'inline-block',
  width: '90%',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    width: '450px'
  }
}, 'FormContainer');

export const Form = glamorous.form({
  display: 'flex',
  flexWrap: 'wrap'
}, 'Form');

export const InputContainer = glamorous.div({
  display: 'flex',
  marginTop: '20px',
  width: '100%'
}, 'InputContainer');

export const ContainActions = glamorous.div({
  display: 'flex',
  marginTop: '40px',
  width: '100%'
}, 'InputContainer')
