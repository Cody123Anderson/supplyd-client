import glamorous from 'glamorous';

import v from '../../../styles/variables';

export const SwagProfileComplete = glamorous.div({
  backgroundColor: v.colorPrimaryDark,
  height: '100vh',
  padding: '100px 5px',
  width: '100vw'
}, 'SwagProfileComplete');

export const SuccessTextTitle = glamorous.div({
  color: v.colorWhite,
  fontSize: v.fontSizeLarge,
  marginTop: '10px'
}, 'SuccessTextTitle');

export const SuccessTextDescription = glamorous.div({
  color: v.colorWhite,
  fontSize: v.fontSizeMedium,
  marginTop: '30px'
}, 'SuccessTextDescription');
