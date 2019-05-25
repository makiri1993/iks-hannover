import Img, { FluidObject } from 'gatsby-image'
import React, { Component } from 'react'

interface State {
  indexOfActiveImage: number
  images: FluidObject[]
  zoomState: boolean
}

interface Props {
  images: FluidObject[]
}
export default class BubbleImage extends Component<Props, State> {
  private zoomState: boolean = true

  constructor(props: Props) {
    super(props)
    const { images } = this.props
    this.state = {
      indexOfActiveImage: 0,
      images,
      zoomState: true,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.nextImage()
    }, 5000)
  }

  componentWillUpdate() {}

  private nextImage() {
    const { images } = this.state
    const image = images.pop()
    if (image) {
      images.unshift(image)
    }
    this.setState({ images, zoomState: this.zoomState })
  }

  render() {
    const { images } = this.props
    // const { zoomState } = this.state
    return (
      <div className='bubble-container'>
        {images.map((image, index) => {
          return (
            <div key={index} onAnimationEnd={() => this.handleAnimationEnd()} className={`bubble-image-container bubble-${index}`}>
              <Img className={`bubble-zoom-in`} fluid={image} alt='image in bubble form in container' />
            </div>
          )
        })}
      </div>
    )
  }

  private handleAnimationEnd(): void {
    // const { zoomState } = this.state
    this.zoomState = !this.zoomState
    // this.setState({ zoomState: !zoomState })
  }
}
