import * as React from 'react'
import { CardMainDiv, CardImg, CardDiv, CardH4 } from './StyledComponents';

class Card extends React.Component {
  render() {
    return (
      <CardMainDiv>
        <CardImg alt={this.props.alt} src={this.props.img} />
        <CardDiv>
          <a href={this.props.link}><CardH4>{this.props.name}</CardH4> </a>
        </CardDiv>
      </CardMainDiv>
    );
  }
}
export default Card
