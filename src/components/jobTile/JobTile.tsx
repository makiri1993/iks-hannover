import React, { Component } from 'react'
import './jobTile.scss'
import Heading from '../heading/Heading'
import Text from '../text/Text'
import { Link } from '@reach/router'

interface JobTileProps {
  title?: string
  text?: string
  link?: string
}

export default class JobTile extends Component<JobTileProps> {
  render() {
    const { title, text, link } = this.props
    return (
      <div className='job-tile-container'>
        <div className='job-tile-title'>
          <Heading size={1} orange fontWeight={500}>
            {title}
          </Heading>
        </div>
        <div className='job-tile-text'>
          <Text preLine>{text}</Text>
        </div>
        <div className='job-tile-link'>
          <Link to={link}>mehr erfahren und bewerben ></Link>
        </div>
      </div>
    )
  }
}
