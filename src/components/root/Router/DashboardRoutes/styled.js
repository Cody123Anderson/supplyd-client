import glamorous from 'glamorous';

import v from '../../../../styles/variables';

export const DashboardRoutes = glamorous.div({
  alignItems: 'stretch',
  display: 'flex',
  textAlign: 'left',
  minHeight: '100vh'
}, 'DashboardRoutes');

export const DashboardContainer = glamorous.div({
  display: 'inline-flex',
  textAlign: 'left',
  width: '100%',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    width: `calc(100vw - ${v.leftNavWidth})`,
  }
}, 'DashboardContainer');
