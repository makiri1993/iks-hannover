import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component, ReactNode } from 'react'
import Text from './text/Text'
import Heading from './heading/Heading'
import { Column } from '../pages'
interface Props {
  columns: Column[]
}

export default class FourColumns extends Component<Props> {
  render() {
    const { columns } = this.props
    return (
      <div className='FlexDivContentCenter'>
        {columns.map(({ title, text, image: { childImageSharp: { fluid } } }, index) => {
          const heading: ReactNode = this.getRightHeading(index, title)

          return (
            <div className='OneColumn'>
              <Link className='HomepageLink' to='/pflegedienst'>
                <Img className='IconForButton' fluid={fluid} />
              </Link>
              <div style={{ padding: '2.4rem' }}>{heading}</div>
              <Text center>
                {text}
                <Link className='' to='/pflegedienst'>
                  ...
                </Link>
              </Text>
            </div>
          )
        })}
      </div>
    )
  }

  private getRightHeading(index: number, title: string): ReactNode {
    switch (index) {
      case 0:
        return (
          <Heading size={1} center green fontWeight={500}>
            {title}
          </Heading>
        )
      case 1:
        return (
          <Heading size={1} center blue fontWeight={500}>
            {title}
          </Heading>
        )
      case 2:
        return (
          <Heading size={1} center red fontWeight={500}>
            {title}
          </Heading>
        )

      default:
        break
    }
  }
}
