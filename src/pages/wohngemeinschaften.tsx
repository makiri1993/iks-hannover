import * as React from 'react'
import Link from 'gatsby-link'

import Page from '../components/Page'
import Container from '../components/Container'

import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { colors } from '../styles/variables'

export default () => (
  <Page>
    <Helmet
      title={'Wohngemeinschaften - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Wenn Sie nicht in ein Alterheim ziehen möchten bieten Ihnen unsere Wohngemeinschaften in Hannover eine sehr gute Alternative. Unsere Pflegedienst kümmert sich dort um alle Ihre Anliegen.'
        }
      ]}
    />
    <Container>
      <BigTextInOrange>Wohngemeinschaften</BigTextInOrange>
      <CenteredPLeftWithMargin>
        Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, bieten sich unsere Wohngemeinschaften in den Stadtteilen
        Roderbruch, List, Davenstedt, Stöcken und Burg als Alternative an.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Die Seniorenwohngemeinschaften im Roderbruch und in der List bestehen aus einer jeweils sehr geräumigen Wohnung mit mehreren
        Balkonen.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Die Seniorenwohngemeinschaft in Davenstedt befindet sich in einem wunderschönen alten Fachwerkhaus mit großem Garten.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        In Stöcken liegt die WG in einem eigenen Hausanbau mit Garten, Versorgungsräumlichkeiten, mehreren Toiletten und individuellen
        Räumen für die Bewohner.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>In Burg leben die Mieter in einem schönen Bungalow mit eigener Terrasse zusammen.</CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>Unsere Wohnobjekte sind zum größten Teil barrierefrei.</CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Diese Wohngemeinschaften richten sich an Senioren, die aus den unterschiedlichsten Gründen nicht mehr allein zuhause leben können,
        etwa aufgrund einer demenziellen Erkrankung.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Wir garantieren eine 24-Stunden-Betreuung: Jede Wohngemeinschaft wird rund um die Uhr durch qualifizierte und engagierte Mitarbeiter
        unseres Pflegedienstes betreut.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Im Unterschied zum Alten- und Pflegeheim findet in den Wohngemeinschaften ein ganz normales Alltagsleben statt, in das sich die
        Mieter der Wohngemeinschaft einbringen können. Die Organisation des Haushaltes, gemeinsame Aktivitäten und die notwendigen
        pflegerischen wie betreuerischen Tätigkeiten werden von den Mitarbeitern unseres Pflegedienstes begleitet bzw. durchgeführt.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Die familiäre Atmosphäre einer Seniorenwohngemeinschaft wirkt sich insbesondere positiv auf den Verlauf einer demenziellen
        Erkrankung und auf die psychische und körperliche Verfassung der Mieter aus. Die aufrecht erhaltene oder hinzugewonnene
        Lebensqualität wird von allen Mietern der Wohngemeinschaften und deren Angehörigen als positivstes Merkmal des gemeinschaftlichen
        Lebens empfunden.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Für eine umfassende Beratung und Besichtigung sowie zu allen Fragen rund um die Finanzierung stehen wir Ihnen gern zur Verfügung.
      </CenteredPLeftWithMargin>
      <DivCenterRowLeft>
        <H4Orange>Galina Fiksman</H4Orange> <SmallerPBehindBigText>| Leitung der Intensivpflege</SmallerPBehindBigText>
      </DivCenterRowLeft>
      <LinkEmailOrange href="mailto:fiksmann@iks-hannover.de">fiksmann@iks-hannover.de</LinkEmailOrange>
    </Container>
  </Page>
)

export const H4Orange = styled.h4`
  color: ${colors.orange};
`

export const CenteredPLeft = styled.p`
  text-align: left;
`
export const CenteredPLeftWithMargin = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
`

export const BigTextInOrange = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 1.5rem;
  color: ${colors.orange};
  letter-spacing: 0.5rem;
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const LinkEmailOrange = styled.a`
  cursor: pointer;
  margin: auto;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration: underline;
  color: ${colors.orange};
  margin-left: 30px;
`

export const SmallerPBehindBigText = styled.p`
  padding-left: 20px;
  padding-top: 18px;
`

export const DivCenterRowLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: left;
  padding: 2rem;
`
