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
    }, 3000)
  }

  private nextImage() {
    const { images } = this.state
    const image = images.pop()
    if (image) {
      images.unshift(image)
    }
    this.setState({ images })
  }

  private getTranslateX(multiplikator: number) {
    return
  }

  render() {
    const { images } = this.props
    const { indexOfActiveImage } = this.state
    return (
      <div className='bubble-container'>
        {images.map((image, index) => {
          // const translateX: number = this.getTranslateX(index)

          return (
            <Img
              key={index}
              className={`bubble bubble-` + index}
              style={{ transform: 'translateX(20%)', height: `${(index + 1) * 8}vh`, width: `${(index + 1) * 8}vh` }}
              fluid={image}
              alt='image in bubble form in container'
            />
          )
        })}
      </div>
    )
  }
}
