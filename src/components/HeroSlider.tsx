import * as React from 'react'
import { Hero, HeroImage } from './StyledComponents'

const slider_1: string = require('../content/images/Slider_1.jpg')
const slider_2: string = require('../content/images/Slider_2.jpg')
const slider_3: string = require('../content/images/Slider_3.jpg')
const slider_4: string = require('../content/images/Slider_4.jpg')
const slider_5: string = require('../content/images/Slider_5.jpg')

interface State {
  activeImage: string
  indexOfActiveImage: number
  image: string[]
}

interface Props {}

export default class HeroSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeImage: slider_1,
      indexOfActiveImage: 0,
      image: [slider_1, slider_2, slider_3, slider_4, slider_5]
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.nextImage()
    }, 5000)
  }

  private nextImage() {
    console.log(this.state.indexOfActiveImage + '    ' + this.state.image.length)
    const newIndex = this.state.indexOfActiveImage + 1
    if (this.state.indexOfActiveImage === this.state.image.length - 1) {
      console.log('letztes Bild')
      this.setState({
        activeImage: this.state.image[0],
        indexOfActiveImage: 0
      })
    } else {
      this.setState({
        activeImage: this.state.image[newIndex],
        indexOfActiveImage: newIndex
      })
    }
  }

  render() {
    return (
      <Hero>
        <HeroImage key={this.state.activeImage} src={this.state.activeImage} alt="" />
      </Hero>
    )
  }
}
