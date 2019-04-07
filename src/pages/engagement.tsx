import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { colors, breakpoints, dimensions } from '../styles/variables'
import Layout from '../components/Layout'
import { PflegedienstP, DivCenterRow } from './jobs'
import ImgWithLink from '../components/ImgWithLink'

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

const p1: string = require('../images/partner/p1.jpg')
const p2: string = require('../images/partner/p2.jpg')
const p3: string = require('../images/partner/p3.jpg')

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
        <PflegedienstP>
          Da uns unsere Kunden sehr am Herzen liegen, engagieren wir uns zudem in verschiedenen Arbeitskreisen, Vereinen und
          Interessengemeinschaften, die sich ebenfalls mit dem Thema häusliche Pflege beschäftigen.
        </PflegedienstP>
        <PflegedienstP>
          Für unsere tägliche Arbeit und unser stetes Bemühen um eine qualitativ hochwertige Pflege sind wir im Jahr 2008 mit dem
          Stadt-Hannover-Preis ausgezeichnet worden.
        </PflegedienstP>
        <FlexDivContentCenter>
          {images.map(el => (
            <EngagementImage src={el.src} alt={el.alt} />
          ))}
        </FlexDivContentCenter>
        <BigTextInOrange>PARTNER</BigTextInOrange>
        <PflegedienstP>
          Unsere Kooperationspartner in Hannover und Umgebung sind unter anderem die Unternehmen „ZAK – Zuhause alles klar“, ein Unternehmen
          für haushaltsnahe Dienstleistungen, sowie ZAK – Pflege, ein Pflegedienst im südlichen Hannover, und das Yoga- und Pilatesstudio
          VitaList in Hannover-List.“
        </PflegedienstP>
        <DivCenterRow>
          <ImgWithLink link='https://zak-pflege-hannover.de/' title='ZAK Pflege Hannover' img={p1} alt='Logo von der ZAK Pflege hannover' />
          <ImgWithLink
            link='http://www.zuhause-alles-klar.de/'
            title='ZAK zu hause alles klar'
            img={p2}
            alt='Logo von der ZAK zu hause alles klar'
          />
          <ImgWithLink
            link='http://www.vita-list.de/'
            title='Vita List Hannover - Joga - Pilates- Balance'
            img={p3}
            alt='Logo von der Vita List Hannover'
          />
        </DivCenterRow>
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
