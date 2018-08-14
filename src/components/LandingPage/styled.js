import glamorous from 'glamorous';

import v from '../../styles/variables';
import boxImage from '../../images/example-box.png';

const exports = {};

exports.Container = glamorous.div({
  paddingBottom: '150px',
  minHeight: '100vh'
}, 'Container');

exports.MainSection = glamorous.section({
  alignItems: 'center',
  backgroundColor: v.colorBlack5,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '75px 20px 100px',
  textAlign: 'center',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    padding: '175px 20px',
  }
}, 'MainSection');

exports.ImageHalf = glamorous.div({
  display: 'inline-block',
  marginBottom: '50px',
  width: '100%',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    marginBottom: 0,
    width: '50%'
  }
}, 'ImageHalf');

exports.BoxImage = glamorous.div({
  backgroundImage: `url(${boxImage})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'inline-block',
  height: '185px',
  width: '250px',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    height: '259px',
    width: '351px'
  }
}, 'BoxImage');

exports.CTAHalf = glamorous.div({
  display: 'inline-block',
  width: '100%',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    width: '50%'
  }
}, 'CTAHalf');

exports.CTATextTitle = glamorous.div({
  fontSize: v.fontSizeJumbo,
}, 'CTATextTitle');

exports.CTAText = glamorous.div({
  display: 'inline-block',
  fontSize: v.fontSizeLarge,
  marginTop: '30px',
  maxWidth: '475px'
}, 'CTAText');

exports.CTAButton = glamorous.div({
  marginTop: '50px',

  [`@media (min-width: ${v.maxMobileWidth})`]: {
    // desktop
    marginTop: '30px'
  }
}, 'CTAButton');

exports.HowTitle = glamorous.div({
  fontSize: v.fontSizeJumbo,
  marginTop: '100px',
  textAlign: 'center'
}, 'HowTitle');

exports.HowContent = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  marginBottom: '75px',
}, 'HowContent');

exports.Step = glamorous.div({
  marginTop: '75px',
  textAlign: 'center',
  maxWidth: '314px'
}, 'Step');

exports.StepTitle = glamorous.div({
  fontSize: v.fontSizeLarge,
  fontWeight: v.fontWeightRegular,
  marginBottom: '15px'
}, 'StepTitle');

exports.StepBody = glamorous.div({
  fontSize: v.fontSizeMedium
}, 'StepBody');

exports.HowButtonContainer = glamorous.div({
  marginTop: '100px',
  textAlign: 'center'
}, 'HowButtonContainer');

export default exports;
