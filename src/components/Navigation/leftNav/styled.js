import glamorous from 'glamorous';

import v from '../../../styles/variables';

const navPaddingLeft = '20px';

export const LeftDashboardNav = glamorous.div({
  backgroundColor: v.colorBlack80,
  color: v.colorBlack30,
  width: v.leftNavWidth,
}, 'LeftDashboardNav');

export const Title = glamorous.div({
  color: v.colorPrimary,
  letterSpacing: v.fontSpacingLarge,
  fontSize: v.fontSizeLarge,
  marginTop: '30px',
  paddingLeft: navPaddingLeft
}, 'Title');

export const BusName = glamorous.div({
  color: v.colorWhite,
  letterSpacing: v.fontSpacingMedium,
  fontSize: v.fontSizeSmall,
  marginTop: '20px',
  paddingLeft: navPaddingLeft
}, 'BusName');

export const SignOut = glamorous.div({
  letterSpacing: v.fontSpacingMedium,
  fontSize: v.fontSizeSmall,
  margin: '10px 0 80px',
  paddingLeft: navPaddingLeft
}, 'SignOut');

