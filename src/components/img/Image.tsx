import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'

import './image.scss'

/*
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

interface Props {
  imageName: string,
  maxWidth?: number,
  className?: string,
  alt: string,
  position?: 'right' | 'left' | 'center'
  hideOnMobile?: boolean
}

const Image = ({imageName, maxWidth = 500, className='', alt, position, hideOnMobile= false} : Props) => (
  <StaticQuery
  query={graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        (edge: { node: { fluid: { originalName: string; }; }; }) => edge.node.fluid.originalName === imageName
      )
      if (!image) {
        return null
      }
      return (
        <div className={hideOnMobile ? 'hideImageOnMobile' : 'image-container'}>
          <div className={position ? position : ''}>
            <div style={{ width: maxWidth}} className='image-item'>
              <div style={{ maxWidth: maxWidth}}>
                <Img alt={alt} className={className} fluid={image.node.fluid} />
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)
export default Image
