import * as React from 'react'
// import Link from 'gatsby-link'

import Page from '../components/Page'
import { DivCenter, CenteredH1Orange, DivColCenter, StyledIMGBig, POrange, CenteredText, PflegedienstP, PflegedienstPCenter, POrangeCenter, StyledBR, LinkEmail, LinkEmailOrange, H4Orange, H4OrangeCenter } from '../components/StyledComponents';

const map: string = require('../images/maps.png')

export default () => (
  <Page>
    <DivCenter>
      <DivColCenter>
        <CenteredH1Orange>ANFAHRT</CenteredH1Orange>
        <StyledIMGBig src={map} alt="Bilder der Karte zum Büro" title="Bild zur Anfahrt zu unserem Büro" />
        <CenteredH1Orange>IMPRESSUM</CenteredH1Orange>
        <POrangeCenter>
          Interkultureller Sozialdienst GmbH
          Ambulante Alten- und Krankenpflege
        </POrangeCenter>
        <PflegedienstPCenter>
          Plaza De Rosalia 1
          <StyledBR />
          30449 Hannover
          <StyledBR />
          TEL: 0511 / 210 10 44
          <StyledBR />
          FAX: 0511 / 210 10 66
        </PflegedienstPCenter>
        <POrangeCenter>
          MAIL: <LinkEmailOrange href="mailto:iks-hannover@iks-hannover.de">iks-hannover@iks-hannover.de</LinkEmailOrange>
        </POrangeCenter>
        <PflegedienstPCenter>
          Registergericht: Amtsgericht Hannover
          <StyledBR />
          Registernummer: HRB 204736
          <StyledBR />
          Persönlich haftende Gesellschafterin: Jasmin Arbabian-Vogel
          <StyledBR />
          Vertretungsberechtigter Geschäftsführer: Jasmin Arbabian-Vogel
          <StyledBR />
          Steuernummer Finanzamt Nord: 25/210/19598
          <StyledBR />
        </PflegedienstPCenter>
        <H4OrangeCenter>
          HAFTUNGSHINWEIS
        </H4OrangeCenter>
        <PflegedienstPCenter>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </PflegedienstPCenter>
        <StyledBR />
        <POrangeCenter>
          Gestaltung
        </POrangeCenter>
        <PflegedienstPCenter>
          s.artisfaction
          <StyledBR />
          Hannover
          <StyledBR />
          0177 648 554 0
          <StyledBR />
        </PflegedienstPCenter>
        <POrangeCenter>
          <LinkEmailOrange target="_blank" rel="noopener noreferrer" href="www.s-artifaction.com">www.s-artifaction.com</LinkEmailOrange>
          <StyledBR />
          <LinkEmailOrange href="mailto:s.artisfaction@googlemail.com">s.artisfaction@googlemail.com</LinkEmailOrange>
        </POrangeCenter>
      </DivColCenter>
    </DivCenter>
  </Page>
)
