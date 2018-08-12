import styled from 'styled-components'
import { transparentize } from 'polished'
import Link from 'gatsby-link'
import { heights, dimensions, colors } from '../styles/variables'
import { onEvent, fade } from '../styles/mixins'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

export const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`
export const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`

export const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.gray.header};
  color: ${transparentize(0.5, colors.white)};
`

export const HeaderInner = styled(StyledContainer)`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  :hover {
    background-color: ${colors.orange};
    transition-duration: 1s;
  }
`

export const HomepageLink = styled(Link)`
  position: absolute;
  color: ${colors.white};
  top: 35%;
  /* left: 50; */
  text-align: center;
  font-weight: 600;
  ${onEvent`
    text-decoration: none;
  `};
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  text-align: center;
  width: 100vw;
  background-size: cover;
`
export const HeroImage = styled.img`
  width: 100vw;
  top: 0px;
  left: 0px;
  object-fit: cover;
  animation: ${fade};
  animation-duration: 1.3s;
`

export const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  /* padding: ${dimensions.containerPadding}rem; */
  margin-bottom: 3rem;
`
export const CenteredText = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;
`

export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  padding: 2.4rem;
  margin: 1em;
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 1em;
`

export const CenteredP = styled.p`
  text-align: center;
`

export const StyledBR = styled.br`
`


export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center
`
export const StyledFooterDiv = styled.div`
  text-align: left;
  width: 500px;
`

export const H4Footer = styled.h4`
  color: ${colors.white};
  font-weight: 500;
  /* padding: 1.4rem; */
`

export const PFooter = styled.p`
  color: ${colors.white};
`

export const StyledIMG = styled.img`
  width: auto;
  height: 100px;
`
