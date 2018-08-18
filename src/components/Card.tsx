import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
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

export const CardMainDiv = styled.div`
  width: 350px;
  height: 250px;
  background-color: ${colors.orange};;
  position: relative;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 25px;
  @media only screen and (max-width: 890px) {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 390px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`
export const CardDiv = styled.div`
  width: 100%;
  height: auto;
  bottom: 0;
  position: absolute;
  background-color: ${colors.orange};
`
export const CardH4 = styled.h4`
  text-align: center;
  color: ${colors.white};
  cursor: pointer;
  font-size: 15px;
`
