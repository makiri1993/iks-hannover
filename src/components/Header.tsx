import * as React from 'react'
import { StyledHeader, HeaderInner, LinkWrapper, HomepageLink } from './StyledComponents'

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
