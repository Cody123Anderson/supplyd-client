import glamorous from 'glamorous';

import v from '../../styles/variables';

export const LeftDashboardNav = glamorous.div({
  backgroundColor: v.colorBlack80,
  color: v.colorWhite,
  display: 'inline-flex',
  width: v.leftNavWidth,

  [`@media (max-width: ${v.maxMobileWidth})`]: {
    // don't show on smaller devices
    display: 'none'
  }
}, 'LeftDashboardNav');

