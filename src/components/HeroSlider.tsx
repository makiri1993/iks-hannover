import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

interface State {
  indexOfActiveImage: number
}

interface Props {
  images: FluidObject[]
}
export default class HeroSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      indexOfActiveImage: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.nextImage()
    }, 5000)
  }

  private nextImage() {
    const newIndex = this.state.indexOfActiveImage + 1
    if (this.state.indexOfActiveImage === this.props.images.length - 1) {
      this.setState({
        indexOfActiveImage: 0,
      })
    } else {
      this.setState({
        indexOfActiveImage: newIndex,
      })
    }
  }
  render() {
    const { images } = this.props
    const { indexOfActiveImage } = this.state
    return (
      <div className='Hero'>
        <Img className='HeroImage' fluid={images[indexOfActiveImage]} alt='' />
      </div>
    )
  }
}
