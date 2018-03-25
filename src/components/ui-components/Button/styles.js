import glamorous from 'glamorous';
import { Button } from 'material-ui';

import v from '../../../styles/variables';

export const StyledButton = glamorous(Button)({
  '&.supplyd-raisedPrimary': {
    backgroundColor: v.colorPrimary,
    boxShadow: `0 2px 4px -1px ${v.colorBlack50}`,
    color: v.colorWhite,
    fontWeight: v.fontWeightLight,
    paddingTop: '11px',

    '&:hover': {
      backgroundColor: v.colorPrimaryHover,
    }
  },
  '&.supplyd-raisedSecondary': {

  },
  '&.supplyd-flatPrimary': {
  },
  '&.supplyd-flatSecondary': {
    backgroundColor: v.colorWhite,
    color: v.colorFont,
    fontWeight: v.fontWeightLight,

    '&:hover': {
      backgroundColor: v.colorBlack5,
    }
  }
});
