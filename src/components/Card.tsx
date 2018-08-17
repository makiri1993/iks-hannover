import * as React from 'react'
import { CardMainDiv, CardImg, CardDiv, CardH4 } from './StyledComponents'

class Card extends React.Component {
  private render() {
    return (
      <CardMainDiv>
        <CardImg title={this.props.alt} alt={this.props.alt} src={this.props.img} />
        <CardDiv>
          <a title={this.props.name} target="blank_" href={this.props.link}><CardH4>{this.props.name}</CardH4> </a>
        </CardDiv>
      </CardMainDiv>
    )
  }
}
export default Card
