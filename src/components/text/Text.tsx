import React, { Component, ReactNode } from 'react'

interface TextProps {
  underline?: boolean
  preLine?: boolean
  center?: boolean
  orange?: boolean
  green?: boolean
  children?: ReactNode
}

export default class Text extends Component<TextProps> {
  render() {
    return <p className={this.getClassNames}>{this.props.children}</p>
  }

  private get getClassNames() {
    const classNames: string[] = []
    const { underline, preLine, center, green, orange } = this.props
    if (center) {
      classNames.push('text-center')
    }

    if (preLine) {
      classNames.push('text-wrap-pre-line')
    }

    if (underline) {
      classNames.push('text-underline')
    }

    if (orange) {
      classNames.push('color-orange')
    }

    if (green) {
      classNames.push('color-green')
    }

    return classNames.join(' ')
  }
}
