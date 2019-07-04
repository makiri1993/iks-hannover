import React, { Component, createRef, ReactNode, RefObject } from 'react'
import NavItem, { NavItemProps } from './NavItem'
import { Link } from 'gatsby'
import MetaNav from './MetaNav'

const logo = require('../../../static/img/logo_iks.png')
const slogan = require('../../../static/img/schriftzug.svg')

interface Props {
  navData: NavItemProps[]
}

interface State {
  mobile: boolean
  transform: number
  scrollHeight: number
  innerHeight: number
}

export default class Nav extends Component<Props, State> {
  private ref: RefObject<HTMLDivElement>

  constructor(props: Props) {
    super(props)
    this.ref = createRef()
    this.state = {
      mobile: false,
      transform: 0,
      scrollHeight: 0,
      innerHeight: 0,
    }
  }

  componentDidMount(): void {
    this.handleResize()
    setTimeout(() => {
      const { current } = this.ref
      if (current) {
        const { scrollHeight } = current
        this.setState({ scrollHeight })
      }
    }, 180)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize)
  }

  render(): ReactNode {
    const { mobile, transform } = this.state
    return (
      <>
        <div className='navbar' ref={this.ref}>
          <div className='navbar-logo'>
            <Link to='/'>
              <img src={logo} className='logo' alt='Logo des IKS Hannover' />
            </Link>
            <img src={slogan} className='slogan' alt='Logo des IKS Hannover' />
          </div>
          {mobile ? (
            <button className={`menu-button ${transform <= 50 ? 'animation-burger' : null}`} onClick={this.handleTouch} aria-label='Button zum Öffnen und Schließen der Navigation'>
              <span className='burger' />
              <span className='burger' />
              <span className='burger' />
            </button>
          ) : (
            this.renderNavItems
          )}
        </div>
        {mobile ? this.renderMobile : null}
      </>
    )
  }

  private get renderMobile(): ReactNode {
    const { transform, scrollHeight, innerHeight } = this.state
    const { navData } = this.props
    return (
      <div className='mobile-navbar' style={{ top: 0, transform: `translateX(${transform}%)`, height: transform <= 50 ? innerHeight : 0, marginTop: scrollHeight }}>
        <div className='navbar-item-container'>
          {navData.map(({ to, title, subItems }, index) => (
            <NavItem key={index} title={title} to={to} subItems={subItems} handleTouch={this.handleTouch} />
          ))}
        </div>
        <MetaNav socialmedia />
      </div>
    )
  }

  private handleResize = (): void => {
    const { innerWidth, innerHeight } = window

    this.setState({ innerHeight })
    const { current } = this.ref
    if (current) {
      const { scrollHeight } = current
      innerWidth < 550 ? this.setState({ mobile: true, transform: 100, scrollHeight }) : this.setState({ mobile: true, transform: 100, scrollHeight })
      // true ? this.setState({ mobile: true, transform: 100, scrollHeight }) : this.setState({ mobile: false, transform: 0, scrollHeight })
    }
  }

  private get renderNavItems(): ReactNode {
    const { navData } = this.props
    return navData.map(({ to, title, subItems }, index) => <NavItem key={index} title={title} to={to} subItems={subItems} />)
  }

  private handleTouch = (): void => {
    const { innerWidth, innerHeight } = window
    const { transform, scrollHeight } = this.state
    this.setState({ innerHeight: innerHeight - scrollHeight })

    transform > 50 ? this.setState({ transform: innerWidth < 550 ? 0 : 50 }) : this.setState({ transform: 100 })
  }
}
