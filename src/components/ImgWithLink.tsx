import React from 'react'

interface Props {
  img: string
  alt: string
  link: string
  title: string
}
class ImgWithLink extends React.Component<Props> {
  render() {
    return (
      <div>
        <a target='_blank' rel='noopener noreferrer' href={this.props.link} title={this.props.title}>
          <img className='CardImg' src={this.props.img} alt={this.props.alt} title={this.props.title} />
        </a>
      </div>
    )
  }
}
export default ImgWithLink
