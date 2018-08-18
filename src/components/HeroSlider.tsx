import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import { fade } from '../styles/mixins'

const slider_1: string = require('../images/Slider_1.jpg')
const slider_2: string = require('../images/Slider_2.jpg')
const slider_3: string = require('../images/Slider_3.jpg')
const slider_4: string = require('../images/Slider_4.jpg')
const slider_5: string = require('../images/Slider_5.jpg')

interface State {
  activeImage: string
  indexOfActiveImage: number
  image: string[]
  newImage: HTMLImageElement[]
}
interface Props {}
export default class HeroSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeImage: slider_1,
      indexOfActiveImage: 0,
      image: [slider_1, slider_2, slider_3, slider_4, slider_5],
      newImage: []
    }
  }

  componentDidMount() {
    this.setAllImages()
    setInterval(() => {
      this.nextImage()
    }, 5000)
  }
  private setAllImages() {
    const sliderA: HTMLImageElement = new Image()
    const sliderB: HTMLImageElement = new Image()
    const sliderC: HTMLImageElement = new Image()
    const sliderD: HTMLImageElement = new Image()
    const sliderE: HTMLImageElement = new Image()

    sliderA.src = slider_1
    sliderB.src = slider_2
    sliderC.src = slider_3
    sliderD.src = slider_4
    sliderE.src = slider_5

    this.state.newImage.push(sliderA)
    this.state.newImage.push(sliderB)
    this.state.newImage.push(sliderC)
    this.state.newImage.push(sliderD)
    this.state.newImage.push(sliderE)
  }
  private nextImage() {
    const newIndex = this.state.indexOfActiveImage + 1
    if (this.state.indexOfActiveImage === this.state.image.length - 1) {
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

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  text-align: center;
  width: 100vw;
  height: auto;
  background-size: cover;
`
export const HeroImage = styled.img`
  width: 100vw;
  top: 0px;
  left: 0px;
  object-fit: cover;
  animation: ${fade};
  animation-duration: 1.3s;
`
