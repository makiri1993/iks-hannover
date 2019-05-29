import React from 'react'
import Helmet from 'react-helmet'

import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
// tslint:disable-next-line:no-var-requires
const map: string = require('../../static/img/maps.png')

export default () => (
  <>
    <Helmet
      title={'Impressum - Interkultureller Socialdienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Das Impressum des Interkultureller Socialdienst Hannover. Hier finden Sie die Adresse, unsere Telefon und Faxnummer und weitere Kontaktdaten.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div className='d-flex-column align-center'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              Anfahrt
            </Heading>
          </div>
          <img className='StyledIMGBig' src={map} alt='Bilder der Karte zum Büro' title='Bild zur Anfahrt zu unserem Büro' />
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              Impressum
            </Heading>
          </div>
          <Text center orange>
            Interkultureller Sozialdienst GmbH Ambulante Alten- und Krankenpflege
          </Text>
          <Text center>Plaza De Rosalia 1</Text>
          <Text center>30449 Hannover</Text>
          <Text center>TEL: 0511 / 210 10 44</Text>
          <Text center>FAX: 0511 / 210 10 66</Text>
          <Text center>
            MAIL:{' '}
            <a className='color-orange' title='Email' href='mailto:iks-hannover@iks-hannover.de'>
              iks-hannover@iks-hannover.de
            </a>
          </Text>
          <Text center>Registergericht: Amtsgericht Hannover</Text>
          <Text center>Registernummer: HRB 204736</Text>
          <Text center>Persönlich haftende Gesellschafterin: Jasmin Arbabian-Vogel</Text>
          <Text center>Vertretungsberechtigter Geschäftsführer: Jasmin Arbabian-Vogel</Text>
          <Text center>Steuernummer Finanzamt Nord: 25/210/19598</Text>
          <Heading size={4} center orange>
            HAFTUNGSHINWEIS
          </Heading>
          <Text center>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber verantwortlich.
          </Text>
          {/*<Text center>Gestaltung</Text>*/}
          {/*<Text center>*/}
          {/*  s.artisfaction*/}
          {/*  Hannover*/}
          {/*</Text>*/}
          {/*<Text center>*/}
          {/*  <a className='color-orange' target='_blank' rel='noopener noreferrer' href='www.s-artifaction.com'>*/}
          {/*    www.s-artifaction.com*/}
          {/*  </a>*/}
          {/*  <a className='color-orange' title='Email' href='mailto:s.artisfaction@googlemail.com'>*/}
          {/*    s.artisfaction@googlemail.com*/}
          {/*  </a>*/}
          {/*</Text>*/}
        </div>
      </div>
    </div>
  </>
)
