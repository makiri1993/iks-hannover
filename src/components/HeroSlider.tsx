import * as React from 'react'
import { Hero, HeroImage } from './StyledComponents'

const slider_1: string = require('../images/Slider_1.jpg')
const slider_2: string = require('../images/Slider_2.jpg')
const slider_3: string = require('../images/Slider_3.jpg')
const slider_4: string = require('../images/Slider_4.jpg')
const slider_5: string = require('../images/Slider_5.jpg')

interface State {
  activeImage: string
  indexOfActiveImage: number
  image: JSX.Element[]
  activeSlider: JSX.Element
}

interface Props {}

export default class HeroSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeImage: slider_1,
      activeSlider: <HeroImage src={slider_1} alt="" />,
      indexOfActiveImage: 0,
      image: [
        <HeroImage key={0} src={slider_1} alt="" />,
        <HeroImage key={1} src={slider_2} alt="" />,
        <HeroImage key={2} src={slider_3} alt="" />,
        <HeroImage key={3} src={slider_4} alt="" />,
        <HeroImage key={4} src={slider_5} alt="" />
      ]
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
      this.setState({
        activeSlider: this.state.image[0],
        indexOfActiveImage: 0
      })
    } else {
      this.setState({
        activeSlider: this.state.image[newIndex],
        indexOfActiveImage: newIndex
      })
    }
  }

  render() {
    return <Hero>{this.state.activeSlider}</Hero>
  }
}
