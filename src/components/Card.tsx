import React, { Component } from 'react'

export interface CardProps {
  name: string
  img: string
  alt: string
  link: string
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className='card-container'>
        <img className='card-image' title={this.props.alt} alt={this.props.alt} src={this.props.img} />
        <div className='card-heading'>
          <a title={this.props.name} target='blank_' href={this.props.link}>
            <h4 className='card-heading'>{this.props.name}</h4>
          </a>
        </div>
      </div>
    )
  }
}
