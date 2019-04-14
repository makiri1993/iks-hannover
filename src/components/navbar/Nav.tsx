import React, { Component, ReactNode, RefObject, createRef } from 'react'
import NavItem from './NavItem'

export interface NavItemProps {
  title: string
  to?: string
  subItems?: NavItemProps[]
}

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
    const { mobile } = this.state
    return (
      <>
        <div className='bg-grey navbar' ref={this.ref}>
          {mobile ? (
            <button className='menu-button' onClick={this.handleTouch}>
              Menu
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
    const { transform, scrollHeight } = this.state
    const { navData } = this.props
    return (
      <div className='mobile-navbar' style={{ top: scrollHeight, transform: `translateX(${transform}%)`, height: `${transform === 0 ? '100vh' : '0vh'}` }}>
        {navData.map(({ to, title, subItems }, index) => (
          <NavItem key={index} title={title} to={to} subItems={subItems} />
        ))}
      </div>
    )
  }

  private handleResize = (): void => {
    const { innerWidth } = window
    const { current } = this.ref
    if (current) {
      console.log('Resize')

      const { scrollHeight } = current
      console.log(scrollHeight)
      // this.setState({ scrollHeight })
      innerWidth < 550 ? this.setState({ mobile: true, transform: 100, scrollHeight }) : this.setState({ mobile: false, transform: 0, scrollHeight })
    }
  }

  private get renderNavItems(): ReactNode {
    const { navData } = this.props
    return navData.map(({ to, title, subItems }, index) => <NavItem key={index} title={title} to={to} subItems={subItems} />)
  }

  private handleTouch = (): void => {
    const { transform } = this.state
    transform !== 0 ? this.setState({ transform: 0 }) : this.setState({ transform: 100 })
  }
}
