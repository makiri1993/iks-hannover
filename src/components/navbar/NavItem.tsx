import React, { Component, createRef, RefObject, ReactNode } from 'react'
import { Link } from 'gatsby'

export interface NavItemProps {
  title: string
  to?: string
  img?: string
  subItems?: NavItemProps[]
  handleTouch?: () => void
}

interface NavItemState {
  height: number
}

export default class NavItem extends Component<NavItemProps, NavItemState> {
  private ref: RefObject<any>

  constructor(props: NavItemProps) {
    super(props)
    this.ref = createRef()
    this.state = {
      height: 0,
    }
  }

  private get getHeight(): number {
    const { height, paddingBottom, paddingTop } = window.getComputedStyle(this.ref.current)
    let fullheight: number = 0
    if (height) {
      fullheight += parseFloat(height)
    }
    if (paddingBottom) {
      fullheight += parseFloat(paddingBottom)
    }
    if (paddingTop) {
      fullheight += parseFloat(paddingTop)
    }

    return fullheight + 10
  }

  render() {
    const { title, to, subItems, handleTouch } = this.props
    const { height } = this.state

    return (
      <>
        <div className='d-flex-column w-100' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {handleTouch && subItems ? (
            <div className='d-flex'>
              <div className={`nav-dropdown-toggle ${height > 100 ? 'dropdown-toggle-animation' : null}`}>|</div>
              {this.renderLinkOrNot({ title, to, ref: this.ref })}
            </div>
          ) : (
            this.renderLinkOrNot({ title, to, ref: this.ref })
          )}
          {subItems ? (
            // <div className={`d-flex-column nav-sub-item overflow-hidden height-transition ml-dropdown`} style={{ height: `${height}px` }}>
            <div className={`d-flex-column nav-sub-item overflow-hidden height-transition ml-dropdown`}>{subItems ? this.renderDropdown(subItems) : null}</div>
          ) : null}
        </div>
      </>
    )
  }

  private handleMouseEnter = () => {
    const { subItems } = this.props
    if (subItems) {
      const { length } = subItems
      this.setState({ height: this.getHeight * length })
    }
  }

  private handleMouseLeave = () => {
    const { subItems } = this.props
    if (subItems) {
      this.setState({ height: 0 })
    }
  }

  private renderDropdown(items: NavItemProps[]) {
    return items.map(({ title, to, img }, index) => this.renderLinkOrNot({ title, to, img, index }))
  }

  private renderLinkOrNot({ title, to, img, ref, index }: { title: string; to?: string; img?: string; ref?: RefObject<any>; index?: number }) {
    const { handleTouch } = this.props
    return (
      <div className='d-flex nav-item-centering' ref={ref} key={index}>
        {to ? (
          <Link className='homepage-link' to={to} onClick={handleTouch}>
            {img ? <img className='nav-image' src={img} alt='Logo des Bereiches' /> : null}
            {title}
          </Link>
        ) : (
          <div className='homepage-link'>{title}</div>
        )}
      </div>
    )
  }
}
