import glamorous from 'glamorous';

import v from '../../../styles/variables';

export const ButtonSelectOne = glamorous.div({
  margin: '10px 0',
  textAlign: 'center'
}, 'ButtonSelectOne');

export const Button = glamorous.div(props => {
  return {
    backgroundColor: props.active ? v.colorPrimary : v.colorBlack5,
    borderRadius: v.borderRadius,
    color: props.active ? v.colorWhite : v.colorFont,
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    margin: '5px 10px 5px 0',
    padding: '20px 0',
    width: '100px',

    '&:last-of-type': {
      marginRight: '0',
    },

    '&:hover': {
      backgroundColor: props.active ? v.colorPrimary : v.colorBlack15,
    }
  }
}, 'ButtonSelectOne');