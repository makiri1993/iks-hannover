import React, { Component, createRef, RefObject, ReactNode } from 'react'
import { Link } from 'gatsby'

export interface NavItemProps {
  title: string
  to?: string
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

  componentDidMount(): void {
    this.height = this.getHeight
    // this.setState({ height: `${this.height}px` })
  }

  private get getHeight(): number {
    const { subItems } = this.props
    if (subItems) {
      const { offsetHeight } = this.ref.current
      return offsetHeight
      // const { marginTop, marginBottom, height, paddingTop, paddingBottom } = window.getComputedStyle(this.ref.current)
    }
    return 0
  }

  componentDidUpdate() {
    // if (this.height !== this.getHeight) {
    // this.height = this.getHeight
    //   this.setState({ height: `${this.height}px` })
    // }
  }

  render() {
    const { title, to, subItems, handleTouch } = this.props
    const { height } = this.state
    const modifiedTitle: string | ReactNode = title
    if (handleTouch && subItems) {
      // modifiedTitle = (
      // <>
      {
        /* <div className={`nav-dropdown-toggle ${parseFloat(height) > 100 ? 'dropdown-toggle-animation' : null}`}>|</div> */
      }
      // {this.renderLinkOrNot({ title: modifiedTitle, to, ref: this.ref })}
      // </>
      // )
    }
    return (
      <>
        <div className='d-flex-column w-100' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {handleTouch && subItems ? (
            <div className='d-flex'>
              <div className={`nav-dropdown-toggle ${height > 100 ? 'dropdown-toggle-animation' : null}`}>|</div>
              {this.renderLinkOrNot({ title: modifiedTitle, to, ref: this.ref })}
            </div>
          ) : (
            this.renderLinkOrNot({ title: modifiedTitle, to, ref: this.ref })
          )}

          <div className={`d-flex-column overflow-hidden height-transition`} style={{ height: `${height}px` }}>
            {subItems ? this.renderDropdown(subItems) : null}
          </div>
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
    return items.map(({ title, to }, index) => this.renderLinkOrNot({ title, to, index }))
  }

  private renderLinkOrNot({ title, to, ref, index }: { title: string | ReactNode; to?: string; ref?: RefObject<any>; index?: number }) {
    const { handleTouch } = this.props
    return to ? (
      <Link key={index} ref={ref} className='homepage-link hover-orange' to={to} onClick={handleTouch}>
        {title}
      </Link>
    ) : (
      <div key={index} className='homepage-link hover-orange' ref={ref}>
        {title}
      </div>
    )
  }
}
