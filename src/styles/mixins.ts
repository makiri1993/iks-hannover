import { css, SimpleInterpolation, keyframes } from 'styled-components'
import { dimensions } from './variables'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  sm: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(576)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  md: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(768)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  lg: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(992)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  xl: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(1200)}em) {
      ${css(styles, ...interpolations)};
    }
  `
}

// event wrapper
export const onEvent = (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
  &:hover,
  &:focus {
    ${css(styles, ...interpolations)};
  }
`

export const fade = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }

`
export const fadeLonger = keyframes`
    from { opacity: 0; }
      to { opacity: 1; }

`
