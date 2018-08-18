import * as React from 'react'
import styled from 'styled-components'

class ImgWithLink extends React.Component {
  render() {
    return (
      <div>
        <a target="_blank" rel="noopener noreferrer" href={this.props.link} title={this.props.title}>
          <CardImg src={this.props.img} alt={this.props.alt} title={this.props.title} />
        </a>
      </div>
    )
  }
}
export default ImgWithLink

const CardImg = styled.img`
  width: 100%;
  height: auto;
`
