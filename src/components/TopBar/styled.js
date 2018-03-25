import glamorous from 'glamorous';

import v from '../../styles/variables';

export const TopBar = glamorous.div({
  alignItems: 'center',
  backgroundColor: v.colorWhite,
  boxShadow: `0 2px 8px -1px ${v.colorBlack30}`,
  display: 'flex',
  height: '66px',
  justifyContent: 'space-between',
  padding: '0 15px 0 30px',
  position: 'sticky'
});

export const Title = glamorous.span({
  color: v.colorPrimary,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '22px',
  letterSpacing: '5.08px',
  fontWeight: v.fontWeightRegular
});
