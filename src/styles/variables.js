import { darken, lighten } from 'polished';

// Boders
export const borderRadius = '4px';

// Break Points
export const leftNavWidth = '275px';
export const maxMobileWidth = '1000px';

// Colors
export const colorBlack = '#000';
export const colorBlack80 = lighten(0.2, colorBlack);
export const colorBlack50 = lighten(0.5, colorBlack);
export const colorBlack30 = lighten(0.7, colorBlack);
export const colorBlack15 = lighten(0.85, colorBlack);
export const colorBlack5 = lighten(0.95, colorBlack);
export const colorFont = colorBlack80;
export const colorPrimary = '#6AD1B0';
export const colorPrimaryDark = darken(0.1, colorPrimary);
export const colorPrimaryLight = lighten(0.1, colorPrimary);
export const colorRed = 'red';
export const colorWhite = '#fff';

// Font Weights
export const fontWeightBlack = '700';
export const fontWeightBold = '500';
export const fontWeightRegular = '400';
export const fontWeightLight = '300';
export const fontWeightThin = '100';

// Font Sizes
export const fontSizeXsmall = '10px';
export const fontSizeSmall = '12px';
export const fontSizeBase = '14px';
export const fontSizeMedium = '18px';
export const fontSizeLarge = '22px';
export const fontSizeXlarge = '28px';
export const fontSizeJumbo = '32px';

export default {
  // Borders
  borderRadius,
  
  // Break Points
  leftNavWidth,
  maxMobileWidth,

  // Colors
  colorBlack,
  colorBlack80,
  colorBlack50,
  colorBlack30,
  colorBlack15,
  colorBlack5,
  colorFont,
  colorPrimary,
  colorPrimaryDark,
  colorPrimaryLight,
  colorRed,
  colorWhite,

  // Font Weights
  fontWeightBlack,
  fontWeightBold,
  fontWeightRegular,
  fontWeightLight,
  fontWeightThin,

  // Font Sizes
  fontSizeXsmall,
  fontSizeSmall,
  fontSizeBase,
  fontSizeMedium,
  fontSizeLarge,
  fontSizeXlarge,
  fontSizeJumbo,
}
