import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component, ReactNode } from 'react'
import Text from './text/Text'
import Heading, { HeadingProps } from './heading/Heading'
import { Column } from '../pages'
interface Props {
  columns: Column[]
}

const links: string[] = ['/pflegedienst', '/wohngemeinschaften', '/intensivpflege']

export default class FourColumns extends Component<Props> {
  render() {
    const { columns } = this.props
    return (
      <div className='FlexDivContentCenter'>
        {columns.map(({ title, text, image: { childImageSharp: { fluid } } }, index) => {
          return (
            <div key={index} className='OneColumn'>
              <Link className='HomepageLink' to={links[index]}>
                <Img className='IconForButton' fluid={fluid} />
              </Link>
              <div style={{ padding: '2.4rem' }}>
                <Heading {...this.getRightHeading(index)}>{title}</Heading>
              </div>
              <Text center>
                {text}
                <Link className={this.getColorForDots(index)} to={links[index]}>
                  ...
                </Link>
              </Text>
            </div>
          )
        })}
      </div>
    )
  }

  private getColorForDots(index: number): string {
    switch (index) {
      case 0:
        return 'color-green'
      case 1:
        return 'color-blue'
      case 2:
        return 'color-red'
      default:
        return ''
    }
  }

  private getRightHeading(index: number): HeadingProps {
    const headingProps: HeadingProps = { size: 1, center: true, fontWeight: 500 }
    switch (index) {
      case 0:
        return {
          ...headingProps,
          green: true,
        }
      case 1:
        return {
          ...headingProps,
          blue: true,
        }
      case 2:
        return {
          ...headingProps,
          red: true,
        }

      default:
        return headingProps
    }
  }
}
