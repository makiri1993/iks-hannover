import React, { Component } from 'react'
import NavItem from './NavItem'

export interface NavItemProps {
  title: string
  to?: string
  subItems?: NavItemProps[]
}

interface Props {
  navData: NavItemProps[]
}


export default class Nav extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {
      // toggleBurger: false,
    }

  }

  render() {
    return (
      <div className='bg-grey position-sticky-top d-flex justify-evenly z-10'>{this.renderNavItems}</div>
    )
  }

  private get renderNavItems() {
    const { navData } = this.props
    return navData.map(({ to, title, subItems },index) => <NavItem key={index} title={title} to={to} subItems={subItems}/>)
  }
}
