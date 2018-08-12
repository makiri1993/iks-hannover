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
  checkForActive: boolean[]
}

interface Props {}

export default class HeroSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      indexOfActiveImage: 0,
      checkForActive: [true, false, false, false, false],
      activeImage: slider_1,
      activeSlider: <HeroImage src={slider_1} alt="" />,
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
    console.log(this.state.indexOfActiveImage + '    ' + this.state.checkForActive.length)
    const checksForActive: boolean[] = this.state.checkForActive
    const newIndex: number = this.state.indexOfActiveImage + 1

    if (this.state.indexOfActiveImage === 4) {
      checksForActive[this.state.indexOfActiveImage] = false
      checksForActive[0] = true
      this.setState({
        activeSlider: this.state.image[0],
        checkForActive: checksForActive,
        indexOfActiveImage: 0
      })
    } else {
      checksForActive[newIndex - 1] = false
      checksForActive[newIndex] = true
      this.setState({
        activeSlider: this.state.image[newIndex],
        checkForActive: checksForActive,
        indexOfActiveImage: newIndex
      })
    }
    console.log(this.state.indexOfActiveImage + '    ' + this.state.checkForActive.length)
  }

  render() {
    return (
      <Hero>
        {this.state.checkForActive[0] ? <HeroImage key={0} src={slider_1} alt="" /> : ''}
        {this.state.checkForActive[1] ? <HeroImage key={1} src={slider_2} alt="" /> : ''}
        {this.state.checkForActive[2] ? <HeroImage key={2} src={slider_3} alt="" /> : ''}
        {this.state.checkForActive[3] ? <HeroImage key={3} src={slider_4} alt="" /> : ''}
        {this.state.checkForActive[4] ? <HeroImage key={4} src={slider_5} alt="" /> : ''}
      </Hero>
    )
  }
}
