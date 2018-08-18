import * as React from 'react'
import styled from 'styled-components'
import { heights, dimensions, colors, widths } from '../styles/variables'
import { getEmSize, onEvent } from '../styles/mixins'
import { transparentize } from 'polished'
import Link from 'gatsby-link'
interface HeaderProps {
  show: boolean
}

const Header: React.SFC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Startseite" to="/" href="/">
          HOME
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Seite Leitbilder" to="/leitbilder" href="/">
          LEITBILDER
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Seite Team und Kontakt" to="/" href="/">
          TEAM | KONTAKT
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Seite Jobs" to="/jobs" href="/">
          JOBS | PARTNER
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Seite Engagement" to="/" href="/">
          ENGAGEMENT
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink title="Navigation zu der Seite Impressum" to="/impressum" href="/">
          IMPRESSUM | ANFAHRT
        </HomepageLink>
      </LinkWrapper>
    </HeaderInner>
  </StyledHeader>
)
export default Header

export const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
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
  /* position: absolute; */
  color: ${colors.white};
  top: 35%;
  /* left: 50; */
  text-align: center;
  font-weight: 600;
  ${onEvent`
    text-decoration: none;
  `};
`
