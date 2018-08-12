import * as React from 'react'
import { StyledHeader, HeaderInner, LinkWrapper, HomepageLink } from './StyledComponents'

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          HOME
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          LEITBILDER
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          TEAM | KONTAKT
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          JOBS | PARTNER
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          ENGAGEMENT
        </HomepageLink>
      </LinkWrapper>
      <LinkWrapper>
        <HomepageLink to="/" href="/">
          IMPRESSUM | ANFAHRT
        </HomepageLink>
      </LinkWrapper>
    </HeaderInner>
  </StyledHeader>
)

export default Header
