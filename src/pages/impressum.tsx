import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import styled from 'styled-components'
import { dimensions, colors } from '../styles/variables'
const map: string = require('../images/maps.png')

export default () => (
  <Page>
    <Helmet
      title={'Impressum - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Das Impressum des Interkultureller Pflegedienst Hannover. Hier finden Sie die Adresse, unsere Telefon und Faxnummer und weitere Kontaktdaten.'
        }
      ]}
    />
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
          MAIL: <LinkEmailOrange titel="Email" href="mailto:iks-hannover@iks-hannover.de">iks-hannover@iks-hannover.de</LinkEmailOrange>
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
          <LinkEmailOrange titel="Email" href="mailto:s.artisfaction@googlemail.com">s.artisfaction@googlemail.com</LinkEmailOrange>
        </POrangeCenter>
      </DivColCenter>
    </DivCenter>
  </Page>
)

export const StyledIMGBig = styled.img`
  width: 550px;
  height: auto;
`

export const DivCenter = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivColCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  width: 450px;
`

export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 50px;
`

export const CenteredH1Orange = CenteredH1.extend`
  color: ${colors.orange};
`

export const H4Orange = styled.h4`
  color: ${colors.orange};
`

export const H4OrangeCenter = H4Orange.extend`
  text-align: center;
`

export const PflegedienstP = styled.p`
  color: black;
`

export const POrange = PflegedienstP.extend`
  color: ${colors.orange};
`

export const POrangeCenter = POrange.extend`
  text-align: center;
`

export const PflegedienstPCenter = PflegedienstP.extend`
  text-align: center;
`

export const StyledBR = styled.br``

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`

export const LinkEmailOrange = LinkEmail.extend`
  text-decoration: underline;
  color: ${colors.orange};
`
