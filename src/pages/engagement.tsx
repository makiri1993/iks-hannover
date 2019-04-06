import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { colors, breakpoints, dimensions } from '../styles/variables'
import Layout from '../components/Layout'

const fubaImage: string = require('../images/partner/96-2.jpg')
const alzImage: string = require('../images/partner/alzheimer.jpg')
const badImage: string = require('../images/partner/bad.jpg')
const chartaImage: string = require('../images/partner/charta.jpg')
const fairImage: string = require('../images/partner/fairKAUF.jpg')
const freiImage: string = require('../images/partner/Freiwilligenzentrum_Hannover.png')
const freundImage: string = require('../images/partner/freundeskreis.jpg')
const gesundImage: string = require('../images/partner/gesundheitswirtschaft.jpg')
const msfImage: string = require('../images/partner/msf.jpg')
const naviImage: string = require('../images/partner/NaVi.jpg')
const phrImage: string = require('../images/partner/phr-1.jpg')

const images: { src: string; alt: string }[] = [
  { src: fubaImage, alt: 'Bild von Hannover96' },
  { src: alzImage, alt: 'Bild von Alzheimer Gesellschaft' },
  { src: badImage, alt: 'Bild von bad e.V.' },
  { src: chartaImage, alt: 'Bild von charta der Vielfalt' },
  { src: fairImage, alt: 'Bild von fairKauf eG' },
  { src: freiImage, alt: 'Bild von Freiwilligenzentrum Hannover e.V.' },
  { src: freundImage, alt: 'Bild von Freundekreis Hannover e.V.' },
  { src: gesundImage, alt: 'Bild von Gesundheitswirtschaft Hannover e.V.' },
  { src: msfImage, alt: 'Bild von Medecins Sans Frontieres' },
  { src: naviImage, alt: 'Bild von NaVi' },
  { src: phrImage, alt: 'Bild von Pro Hannover Region' },
]

export default () => (
  <Layout>
    <Page>
      <Container>
        <BigTextInOrange>ENGAGEMENT</BigTextInOrange>
        <PinOrange>
          {' '}
          Da uns unsere Kunden sehr am Herzen liegen, engagieren wir uns in verschiedenen Arbeitskreisen, Vereinen und
          Interessengemeinschaften, die sich ebenfalls mit dem Thema häusliche Pflege beschäftigen.
        </PinOrange>
        <PWithMargin>
          Für unsere tägliche Arbeit und unser stetes Bemühen um eine qualitativ hochwertige Pflege sind wir im Jahr 2008 mit dem
          Stadt-Hannover-Preis ausgezeichnet worden.
        </PWithMargin>
        <FlexDivContentCenter>
          {images.map(el => (
            <EngagementImage src={el.src} alt={el.alt} />
          ))}
        </FlexDivContentCenter>
      </Container>
    </Page>
  </Layout>
)

export const BigTextInOrange = styled.div`
  font-size: ${dimensions.headingSizes.siteHeader}rem;
  text-align: center;
  margin: 1.5rem;
  color: ${colors.orange};

  @media only screen and (max-width: ${breakpoints.sm}px) {
    font-size: 2rem;
  }
`
export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`

export const EngagementImage = styled.img`
  width: 189px;
  height: 143px;
  margin: 0 auto;
`

export const MarginForTile = styled.div`
  margin: 0.4rem;
`

export const PWithMargin = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
`

export const PinOrange = styled(PWithMargin)`
  color: ${colors.orange};
`
