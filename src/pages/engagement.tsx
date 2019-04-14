import React from 'react'

import ImgWithLink from '../components/ImgWithLink'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'

//karim
// tslint:disable-next-line:no-var-requires
const fubaImage: string = require('../../static/img/partner/96-2.jpg')
// tslint:disable-next-line:no-var-requires
const alzImage: string = require('../../static/img/partner/alzheimer.jpg')
// tslint:disable-next-line:no-var-requires
const badImage: string = require('../../static/img/partner/bad.jpg')
// tslint:disable-next-line:no-var-requires
const chartaImage: string = require('../../static/img/partner/charta.jpg')
// tslint:disable-next-line:no-var-requires
const fairImage: string = require('../../static/img/partner/fairKAUF.jpg')
// tslint:disable-next-line:no-var-requires
const freiImage: string = require('../../static/img/partner/Freiwilligenzentrum_Hannover.png')
// tslint:disable-next-line:no-var-requires
const freundImage: string = require('../../static/img/partner/freundeskreis.jpg')
// tslint:disable-next-line:no-var-requires
const gesundImage: string = require('../../static/img/partner/gesundheitswirtschaft.jpg')
// tslint:disable-next-line:no-var-requires
const msfImage: string = require('../../static/img/partner/msf.jpg')
// tslint:disable-next-line:no-var-requires
const naviImage: string = require('../../static/img/partner/NaVi.jpg')
// tslint:disable-next-line:no-var-requires
const phrImage: string = require('../../static/img/partner/phr-1.jpg')

// tslint:disable-next-line:no-var-requires
const p1: string = require('../../static/img/partner/p1.jpg')
// tslint:disable-next-line:no-var-requires
const p2: string = require('../../static/img/partner/p2.jpg')
// tslint:disable-next-line:no-var-requires
const p3: string = require('../../static/img/partner/p3.jpg')

const images: Array<{ src: string; alt: string }> = [
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
  <>
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} uppercase center orange fontWeight={500}>
            Engagement
          </Heading>
        </div>
        <Text>
          Da uns unsere Kunden sehr am Herzen liegen, engagieren wir uns zudem in verschiedenen Arbeitskreisen, Vereinen und Interessengemeinschaften, die sich ebenfalls mit dem
          Thema häusliche Pflege beschäftigen.
        </Text>
        <Text>
          Für unsere tägliche Arbeit und unser stetes Bemühen um eine qualitativ hochwertige Pflege sind wir im Jahr 2008 mit dem Stadt-Hannover-Preis ausgezeichnet worden.
        </Text>
        <div className='FlexDivContentCenterEngagement'>
          {images.map(el => (
            <img className='EngagementImage' src={el.src} alt={el.alt} />
          ))}
        </div>
        <Heading size={4} center orange fontWeight={500}>
          PARTNER
        </Heading>
        <Text>
          Unsere Kooperationspartner in Hannover und Umgebung sind unter anderem die Unternehmen „ZAK – Zuhause alles klar“, ein Unternehmen für haushaltsnahe Dienstleistungen,
          sowie ZAK – Pflege, ein Pflegedienst im südlichen Hannover, und das Yoga- und Pilatesstudio VitaList in Hannover-List.“
        </Text>
        <div className='d-flex justify-center'>
          <ImgWithLink link='https://zak-pflege-hannover.de/' title='ZAK Pflege Hannover' img={p1} alt='Logo von der ZAK Pflege hannover' />
          <ImgWithLink link='http://www.zuhause-alles-klar.de/' title='ZAK zu hause alles klar' img={p2} alt='Logo von der ZAK zu hause alles klar' />
          <ImgWithLink link='http://www.vita-list.de/' title='Vita List Hannover - Joga - Pilates- Balance' img={p3} alt='Logo von der Vita List Hannover' />
        </div>
      </div>
    </div>
  </>
)
