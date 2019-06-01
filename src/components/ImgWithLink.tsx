import React from 'react'
import Img, { FluidObject } from 'gatsby-image'


interface Props {
  img: any
  alt: string
  link: string
  title: string
}
class ImgWithLink extends React.Component<Props> {
  render() {
    return (
      <a className="img-link-container" target='_blank' rel='noopener noreferrer' href={this.props.link} title={this.props.title}>
        <Img className='CardImg' fluid={this.props.img} alt={this.props.alt} title={this.props.title} />
      </a>

    )
  }
}
export default ImgWithLink
