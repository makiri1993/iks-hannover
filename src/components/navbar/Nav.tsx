import React, { Component, createRef, ReactNode, RefObject } from 'react'
import NavItem, { NavItemProps } from './NavItem'

interface Props {
  navData: NavItemProps[]
}

interface State {
  mobile: boolean
  transform: number
  scrollHeight: number
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
          {mobile ? (
            <button className={`menu-button ${transform <= 50 ? 'animation-burger' : null}`} onClick={this.handleTouch}>
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
    const { transform, mobile } = this.state
    const { navData } = this.props
    return (
      <div className='mobile-navbar' style={{ top: 0, transform: `translateX(${transform}%)`, height: `${transform <= 50 ? '100vh' : '0vh'}` }}>
        {navData.map(({ to, title, subItems }, index) => (
          <NavItem key={index} title={title} to={to} subItems={subItems} handleTouch={this.handleTouch} />
        ))}
      </div>
    )
  }

  private handleResize = (): void => {
    const { innerWidth } = window
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
    const { transform } = this.state
    const { innerWidth } = window
    transform > 50 ? this.setState({ transform: innerWidth < 550 ? 0 : 50 }) : this.setState({ transform: 100 })
  }
}
