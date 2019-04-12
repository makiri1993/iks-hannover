import React, { Component, ReactNode } from 'react'

export interface HeadingProps {
  size: number
  orange?: boolean
  red?: boolean
  blue?: boolean
  green?: boolean
  uppercase?: boolean
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900
  center?: boolean
  children?: ReactNode
}

export default class Heading extends Component<HeadingProps> {
  render() {
    return this.getHeading
  }

  private get getHeading(): ReactNode {
    const { size, children, fontWeight } = this.props
    const headingProps = { className: this.getClassNames, style: { fontWeight } }
    switch (size) {
      case 1:
        return <h1 {...headingProps}>{children}</h1>
      case 2:
        return <h2 {...headingProps}>{children}</h2>
      case 3:
        return <h3 {...headingProps}>{children}</h3>
      case 4:
        return <h4 {...headingProps}>{children}</h4>
      case 5:
        return <h5 {...headingProps}>{children}</h5>
      case 6:
        return <h6 {...headingProps}>{children}</h6>
      default:
        return <h1 {...headingProps}>{children}</h1>
    }
  }

  private get getClassNames(): string {
    const classNames: string[] = []
    const { center, uppercase, green, blue, orange, red } = this.props
    if (center) {
      classNames.push('text-center')
    }

    if (uppercase) {
      classNames.push('text-uppercase')
    }

    if (orange) {
      classNames.push('color-orange')
    }

    if (green) {
      classNames.push('color-green')
    }

    if (blue) {
      classNames.push('color-blue')
    }

    if (red) {
      classNames.push('color-red')
    }

    return classNames.join(' ')
  }
}
