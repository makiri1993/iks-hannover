import Img, { FluidObject } from 'gatsby-image'
import React, { Component } from 'react'

interface State {
  indexOfActiveImage: number
  images: FluidObject[]
}

interface Props {
  images: FluidObject[]
}
export default class BubbleImage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { images } = this.props
    this.state = {
      indexOfActiveImage: 0,
      images,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.nextImage()
    }, 500)
  }

  private nextImage() {
    const { images } = this.state
    const image = images.pop()
    if (image) {
      images.unshift(image)
    }
    this.setState({ images })
  }

  render() {
    const { images } = this.props
    return (
      <div className='bubble-container'>
        {images.map((image, index) => {
          // const translateX: number = this.getTranslateX(index)

          return (
            <div className={`bubble-image-container bubble-${index}`} style={{ position: 'absolute' }}>
              <Img key={index} className={`bubble`} fluid={image} alt='image in bubble form in container' />
            </div>
          )
        })}
      </div>
    )
  }
}
