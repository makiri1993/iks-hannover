import React, { Component } from 'react'

interface Props {
  team?: boolean
  image: string
  signature?: string
  name: string
  job: string
  alt: string
  title: string
  email?: string
}

export default class EmployeeTile extends Component<Props> {
  render() {
    return (
      <div className='employee-container'>
        <img className='EmployeeImage' title={this.props.title} alt={this.props.alt} src={this.props.image} />
        <h4 className='CenteredH'>{this.props.name}</h4>
        <p className='CenteredPWithWidth'>{this.props.job}</p>
        {this.props.team ? (
          <a className='LinkEmailOrange' title={this.props.title} href={'mailto:' + this.props.email}>
            {this.props.email}
          </a>
        ) : (
          <img className='SignatureImage' title={this.props.title} alt={this.props.alt} src={this.props.signature} />
        )}
      </div>
    )
  }
}
