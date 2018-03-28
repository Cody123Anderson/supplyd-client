import glamorous from 'glamorous';
import { Button } from 'material-ui';

import v from '../../../styles/variables';

export const StyledButton = glamorous(Button)({
  '&.supplyd-raisedPrimary': {
    color: v.colorWhite,
    fontWeight: v.fontWeightRegular,
    paddingTop: '11px',
  },
  '&.supplyd-raisedSecondary': {

  },
  '&.supplyd-flatPrimary': {
  },
  '&.supplyd-flatSecondary': {
    backgroundColor: v.colorWhite,
    color: v.colorFont,
    fontWeight: v.fontWeightRegular,

    '&:hover': {
      backgroundColor: v.colorBlack5,
    }
  }
});
