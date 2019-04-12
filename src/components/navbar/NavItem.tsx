import React, { Component, createRef, RefObject } from 'react'
import { NavItemProps } from './Nav'
import { Link } from 'gatsby'

interface NavItemState {
  height: string
}

export default class NavItem extends Component<NavItemProps, NavItemState> {
  private ref: RefObject<any>
  private height: number = 0

  constructor(props: NavItemProps) {
    super(props)
    this.ref = createRef()
    this.state = {
      height: 'auto',
    }
  }

  componentDidMount(): void {
    const { subItems } = this.props
    if (subItems) {
      const { offsetHeight } = this.ref.current
      // const { marginTop, marginBottom, height, paddingTop, paddingBottom } = window.getComputedStyle(this.ref.current)
      this.height = offsetHeight
      this.setState({ height: `${offsetHeight}px` })
    }
  }

  render() {
    const { title, to, subItems } = this.props
    const { height } = this.state
    return (
      <div className='d-flex-column overflow-hidden height-transition' style={{ height }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.renderLinkOrNot({ title, to, ref: this.ref })}
        {subItems ? this.renderDropdown(subItems) : null}
      </div>
    )
  }

  private handleMouseEnter = () => {
    const { subItems } = this.props
    if (subItems) {
      const { length } = subItems
      this.setState({ height: `${this.height * (length + 1)}px` })
    }
  }

  private handleMouseLeave = () => {
    const { subItems } = this.props
    if (subItems) {
      this.setState({ height: `${this.height}px` })
    }
  }

  private renderDropdown(items: NavItemProps[]) {
    return items.map(({ title, to }, index) => {
      return this.renderLinkOrNot({ title, to, index })
    })
  }

  private renderLinkOrNot({ title, to, ref, index }: { title: string; to?: string; ref?: RefObject<any>; index?: number }) {
    return to ? (
      <Link key={index} ref={ref} className='homepage-link hover-orange' title={title} to={to}>
        {title}
      </Link>
    ) : (
      <div key={index} className='homepage-link hover-orange' ref={ref}>
        {title}
      </div>
    )
  }
}
