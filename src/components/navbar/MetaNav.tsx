import React, { Component, createRef, ReactNode, RefObject } from 'react'
import { Link } from 'gatsby'

const fb = require('../../../static/img/fb_icon.png')

interface Props {
  socialmedia: boolean
}

export default class MetaNav extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className='metaNav-container'>
        {this.props.socialmedia ? (<Link to='/'><img src={fb} alt='facebook icon' /></Link>
        ) : null}
        <Link to='impressum'>Impressum</Link>
        <Link to='datenschutzerklaerung'>Datenschutzerklärung</Link>
      </div>
    )
  }
}
