import * as React from 'react'
import styled from 'styled-components'
import { heights, dimensions, colors, widths } from '../styles/variables'
import { getEmSize, onEvent, fade, fadeLonger } from '../styles/mixins'
import { transparentize } from 'polished'
import Link from 'gatsby-link'

interface Props {}
interface State {
  showDropdown: boolean
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showDropdown: false
    }
  }

  render() {
    return (
      <StyledHeader>
        <HeaderInner>
          {/* onMouseOver={() => {
            this.setState({ showDropdown: !this.state.showDropdown })
            console.log(this.state.showDropdown)
          }}
          > */}
          <HomepageLink
            onMouseEnter={() => this.setState({ showDropdown: true })}
            onMouseLeave={() => this.setState({ showDropdown: false })}
            title="Navigation zu der Startseite"
            to="/"
            href="/"
          >
            HOME
          </HomepageLink>
          <FlexColumn display={this.state.showDropdown}>
            <HomepageLinkAbsolute title="Navigation zu der Startseite" to="/" href="/">
              PFLEGEDIENST
            </HomepageLinkAbsolute>
            <HomepageLinkAbsolute title="Navigation zu der Startseite" to="/" href="/">
              WOHNGEMEINSCHAFTEN
            </HomepageLinkAbsolute>
            <HomepageLinkAbsolute title="Navigation zu der Startseite" to="/" href="/">
              AUßERKLINISCHE INTENSIVPFLEGE
            </HomepageLinkAbsolute>
          </FlexColumn>
          {/* {this.state.showDropdown ? (
              <LinkWrapperDropDown>
                <HomepageLink title="Navigation zu der Startseite" to="/" href="/">
                  PFLEGEDIENST
                </HomepageLink>
              </LinkWrapperDropDown>
            ) : null} */}
          <HomepageLink title="Navigation zu der Seite Leitbilder" to="/leitbilder" href="/">
            LEITBILDER
          </HomepageLink>
          <HomepageLink title="Navigation zu der Seite Team und Kontakt" to="/team-kontakt" href="/">
            TEAM | KONTAKT
          </HomepageLink>
          <HomepageLink title="Navigation zu der Seite Jobs" to="/jobs" href="/">
            JOBS | PARTNER
          </HomepageLink>
          <HomepageLink title="Navigation zu der Seite Engagement" to="/engagement" href="/">
            ENGAGEMENT
          </HomepageLink>
          <HomepageLink title="Navigation zu der Seite Impressum" to="/impressum" href="/">
            IMPRESSUM | ANFAHRT
          </HomepageLink>
        </HeaderInner>
      </StyledHeader>
    )
  }
}

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
  justify-content: center;
  align-items: center;
`
export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
`
export const LinkWrapperDropDown = styled.div`
  top: 30px;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${colors.orange};
`

interface props {
  display?: boolean
}
export const FlexColumn = styled.div<props>`
  position: absolute;
  width: 30%;
  left: 0px;
  top: ${heights.header}px;
  z-index: 3;
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: opacity 1s;
  ${props => (props.display ? 'opacity: 1;' : '')};
`

export const HomepageLinkAbsolute = styled(Link)`
  color: ${colors.white};
  width: 100%;
  height: 50px;
  text-align: left;
  padding-top: 5%;
  padding-left: 5%;
  font-weight: 600;
  z-index: 3;
  ${onEvent`
    text-decoration: none;
  `};
  background-color: ${colors.orange};
`
export const HomepageLink = styled(Link)`
  color: ${colors.white};
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 2%;
  font-weight: 600;
  ${onEvent`
    text-decoration: none;
  `};
  :hover {
    background-color: ${colors.orange};
    transition-duration: 1s;
  }
`
