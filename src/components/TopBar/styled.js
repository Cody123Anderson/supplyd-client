import glamorous from 'glamorous';

import v from '../../styles/variables';

export const TopBar = glamorous.div({
  backgroundColor: v.colorWhite,
  boxShadow: `0 2px 8px -1px ${v.colorBlack30}`,
  height: '66px',
  padding: '0 15px 0 30px',
  position: 'sticky',
  textAlign: 'center'
}, 'TopBar');

export const Container = glamorous.div({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
}, 'Container');

export const Title = glamorous.span({
  color: v.colorPrimary,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '22px',
  letterSpacing: '5.08px',
  fontWeight: v.fontWeightRegular
}, 'Title');
