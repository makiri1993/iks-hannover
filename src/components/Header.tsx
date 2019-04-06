import * as React from 'react'
import styled from 'styled-components'
import styledTS from 'styled-components-ts'
import Responsive from 'react-responsive'
import { heights, dimensions, colors, widths, breakpoints } from '../styles/variables'
import { getEmSize, onEvent } from '../styles/mixins'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

interface Props {}
interface State {
  showDropdownHome: boolean
  showDropdownLeitbild: boolean
  screenSize: boolean
  toggleBurger: boolean
}

const Desktop = props => <Responsive {...props} minWidth={breakpoints.sm} />
const Mobile = props => <Responsive {...props} maxWidth={breakpoints.sm} />

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showDropdownHome: false,
      showDropdownLeitbild: false,
      screenSize: false,
      toggleBurger: false,
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }
  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
    window.addEventListener('onClick', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
    window.removeEventListener('onClick', this.handleClick)
  }

  private updatePredicate() {
    this.setState({ screenSize: window.innerWidth > breakpoints.sm })
  }

  private handleClick() {
    this.setState({
      toggleBurger: false,
    })
  }
  private getDesktopNavbar() {
    return (
      <HeaderInner>
        <HomepageLink
          onMouseEnter={() => this.setState({ showDropdownHome: true })}
          onMouseLeave={() => this.setState({ showDropdownHome: false })}
          title='Navigation zu der Startseite'
          to='/'
        >
          HOME
          <FlexColumn
            display={this.state.showDropdownHome}
            onMouseEnter={() => this.setState({ showDropdownHome: true })}
            onMouseLeave={() => this.setState({ showDropdownHome: false })}
          >
            <HomepageLinkAbsolute title='Navigation zu der Startseite' to='/pflegedienst'>
              PFLEGEDIENST
            </HomepageLinkAbsolute>
            <HomepageLinkAbsolute title='Navigation zu der Startseite' to='/wohngemeinschaften'>
              WOHNGEMEINSCHAFTEN
            </HomepageLinkAbsolute>
            <HomepageLinkAbsolute title='Navigation zu der Startseite' to='/intensivpflege'>
              AUßERKLINISCHE INTENSIVPFLEGE
            </HomepageLinkAbsolute>
          </FlexColumn>
        </HomepageLink>
        <HomepageLink
          onMouseEnter={() => this.setState({ showDropdownLeitbild: true })}
          onMouseLeave={() => this.setState({ showDropdownLeitbild: false })}
          title='Navigation zu der Seite Leitbilder'
          to='/leitbilder'
        >
          LEITBILDER
          <FlexColumnMoreRight
            display={this.state.showDropdownLeitbild}
            onMouseEnter={() => this.setState({ showDropdownLeitbild: true })}
            onMouseLeave={() => this.setState({ showDropdownLeitbild: false })}
          >
            <HomepageLinkAbsolute title='Navigation zu der Startseite' to='/presse-archiv'>
              PRESSE | ARCHIV
            </HomepageLinkAbsolute>
          </FlexColumnMoreRight>
        </HomepageLink>
        <HomepageLink title='Navigation zu der Seite Team und Kontakt' to='/team-kontakt'>
          TEAM | KONTAKT
        </HomepageLink>
        <HomepageLink title='Navigation zu der Seite Jobs' to='/jobs'>
          JOBS | PARTNER
        </HomepageLink>
        <HomepageLink title='Navigation zu der Seite Engagement' to='/engagement'>
          ENGAGEMENT
        </HomepageLink>
        <HomepageLink title='Navigation zu der Seite Impressum' to='/impressum'>
          IMPRESSUM | ANFAHRT
        </HomepageLink>
      </HeaderInner>
    )
  }

  private getMobileNavbar() {
    return (
      <HeaderInner>
        <Container
          onClick={() => {
            this.setState({ toggleBurger: !this.state.toggleBurger })
          }}
        >
          <Bar />
          <Bar />
          <Bar />
        </Container>
      </HeaderInner>
    )
  }

  private getBurgerMenu() {
    return (
      <BurgerMenu menuBar={this.state.toggleBurger}>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Startseite' to='/'>
          HOME
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Startseite' to='/pflegedienst'>
          PFLEGEDIENST
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Startseite' to='/wohngemeinschaften'>
          WOHNGEMEINSCHAFTEN
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Startseite' to='/intensivpflege'>
          AUßERKLINISCHE INTENSIVPFLEGE
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Seite Leitbilder' to='/leitbilder'>
          LEITBILDER
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Startseite' to='/presse-archiv'>
          PRESSE | ARCHIV
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Seite Team und Kontakt' to='/team-kontakt'>
          TEAM | KONTAKT
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Seite Jobs' to='/jobs'>
          JOBS | PARTNER
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Seite Engagement' to='/engagement'>
          ENGAGEMENT
        </HomepageLink>
        <HomepageLink onClick={() => this.handleClick()} title='Navigation zu der Seite Impressum' to='/impressum'>
          IMPRESSUM | ANFAHRT
        </HomepageLink>
      </BurgerMenu>
    )
  }

  render() {
    return (
      <StyledHeader>
        <Desktop>{this.getDesktopNavbar()}</Desktop>
        <Mobile>{[this.getMobileNavbar(), this.getBurgerMenu()]}</Mobile>
      </StyledHeader>
    )
  }
}

export const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.xl)}em;
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
  @media only screen and (max-width: ${breakpoints.sm}px) {
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: row;
  }
`
export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const FlexColumn = styledTS<{ display: boolean }>(styled.div)`
  position: absolute;
  width: 30%;
  left: 0px;
  top: ${heights.header}px;
  z-index: 3;
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;
  ${props => (props.display ? 'opacity: 1;' : '')};
`

export const FlexColumnMoreRight = styled<{ display: boolean }, 'div'>('div')`
  position: absolute;
  width: 30%;
  left: 160px;
  top: ${heights.header}px;
  z-index: 3;
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;
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
    transition-duration: 0.3s;
  }
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 90%;
    text-align: left;
    padding: 5%;
  }
`

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 14s;
`

const BurgerMenu = styled.div<props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: left;
  width: 75vw;
  top: 60px;
  left: 0px;
  z-index: 3;
  opacity: 0;
  background-color: ${colors.orange};
  -webkit-font-smoothing: antialiased;
  transition: opacity 0.3s ease-in-out;
  ${props => (props.menuBar ? 'opacity: 1;' : '')};
`
