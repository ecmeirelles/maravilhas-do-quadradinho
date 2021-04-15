import { css } from 'styled-components';

export const colors = {
  snow: '#FFFFFF',
  pearl: '#FAFAFA',
  peach: '#F3AEB1',
  aqua: '#3DB3BF',
  lime: '#73F5BA',
  petrol: '#111111',
};

export const breakpoints = {
  xs: 320, // default
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (cls, isIE = false) =>
    css`
      ${isIE
    ? css`
            @media all and (min-width: ${breakpoints[
    label
  ]}px) and (-ms-high-contrast: none) {
              ${cls};
            }
          `
    : css`
            @media (min-width: ${breakpoints[label]}px) {
              ${cls};
            }
          `};
    `;

  return accumulator;
}, {});
