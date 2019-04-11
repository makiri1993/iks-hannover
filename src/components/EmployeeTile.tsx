import React, { Component } from 'react'
import Heading from './heading/Heading'

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
    const { image, title, job, name, team, email, alt, signature } = this.props
    return (
      <div className='employee-container'>
        <img className='EmployeeImage' title={title} alt={alt} src={image}/>
        <Heading size={4} orange>{name}</Heading>
        <p className='CenteredPWithWidth'>{job}</p>
        {team ? (
          <a className='LinkEmailOrange' title={title} href={'mailto:' + email}>
            {email}
          </a>
        ) : (
          <img className='SignatureImage' title={title} alt={alt} src={signature}/>
        )}
      </div>
    )
  }
}
