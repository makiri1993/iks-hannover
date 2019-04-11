import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'

import Layout from '../components/Layout'

const logo_1: string = require('../images/icons/Schriftzug_Wohngemeinschaft.png')
const logo_2: string = require('../images/icons/logo_baum.png')
const flylerLink: string = require('../images/intensivpflege/IKS-AIWG-Flyer_ku_web.pdf')

export default () => (
  <Layout>
    <Helmet
      title={'Tagespflege - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
        },
      ]}
    />
    <CenteredText>
      <CenteredH1Red>Tagespflege</CenteredH1Red>
      <PflegedienstP>
        GANZ NEU IN LINDEN: Unsere Tagespflege
        <StyledBR />
        <StyledBR />
        Bei der Tagespflege wird älteren Menschen die Möglichkeit geboten, weiter in ihrer privaten Umgebung zu wohnen und somit den Kontakt
        zu Familie und Freunden aufrechtzuerhalten. Zu festgelegten Tageszeiten wird die Pflege und Betreuung von pflegebedürftigen
        Menschen, welche sonst durch die Angehörigen oder einen ambulanten Pflegedienst versorgt werden, übernommen.
        <StyledBR />
        <StyledBR />
        Dabei ist es besonders wichtig, die selbständige Lebensführung der Tagespflegegäste so weit wie möglich zu erhalten und zu fördern.
        Auf diese Weise wird auch die Situation der Angehörigen erleichtert.
        <StyledBR />
        <StyledBR />
        <CenteredH4Red>FINANZIERUNG</CenteredH4Red>
        Die Kosten für die Tagespflege werden in Sätzen pro Belegungstag berechnet und bestehen aus den Beträgen für Unterkunft und
        Verpflegung, Betreuungs- und Pflegeleistung, Beförderung sowie Investitionskosten.
        <StyledBR />
        <StyledBR />
        Der Interkulturelle Sozialdienst ist Partner aller Pflegekassen, eine Kostenübernahme für Pflege und Betreuung in der Tagespflege
        ist im Rahmen einer festgestellten Pflegebedürftigkeit daher problemlos möglich. Wir bieten zwei Versorgungsalternativen: Eine
        <StyledBR />
        <StyledBR />
        Unsere Tagespflege befindet sich im Ahrberg-Viertel in Hannover Linden und bietet:
      </PflegedienstP>
      <StyledUL>
        <StyledLI>
          <StyledSpan>12 Betreuungsplätze</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Spezielle Angebote für gerontopsychiatrisch und geriatrisch erkrankte Menschen</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Individuelle Betreuung durch qualifiziertes Personal</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Tage- oder wochenweise Belegung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Fahrdienst inklusive, auch für Rollstuhlfahrer</StyledSpan>
        </StyledLI>
      </StyledUL>
      <PflegedienstP>
        <CenteredH4Red>RÄUMLICHKEITEN</CenteredH4Red>
        Alle Räume sind hell, modern und behindertengerecht ausgestattet.
        {/* <StyledBR /> */}
        {/* <StyledBR /> */}
      </PflegedienstP>
      <StyledUL>
        <StyledLI>
          <StyledSpan>offene Wohnküche</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Wohn- und Aufenthaltsbereich mit TV und gemütlicher Sofaecke</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Ruheraum mit bequemen Liegesesseln</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Ruheraum mit Ruhebetten</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>behindertengerechte Toiletten und Bad</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Außenanlagen und ruhiger Garten</StyledSpan>
        </StyledLI>
      </StyledUL>
      <StyledBR />
      Ihre persönliche Ansprechpartnerin:
      <CenteredH4Red>Galina Fiksmann | Pflegedienstleitung</CenteredH4Red>
      <LinkEmail title='Email Adresse' href='mailto:fiksmann@iks-hannover.de'>
        fiksmann@iks-hannover.de
      </LinkEmail>
      <PflegedienstP>0511 210 10 44</PflegedienstP>
    </CenteredText>
    <StyledBR />
    <StyledBR />
  </Layout>
)

export const PRed = styled.p`
  font-style: italic;
  color: ${colors.red};
`

export const PItalicAndSmall = styled.p`
  font-size: 12px;
`

export const StyledUL = styled.ul``

export const StyledLI = styled.li`
  color: ${colors.red};
`

export const LinkRed = styled.a`
  color: ${colors.red};
`

export const StyledSpan = styled.span`
  color: ${colors.black};
  font-size: 16px;
`

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`

export const CenteredH4Red = styled.h4`
  color: ${colors.red};
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const StyledIMG = styled.img`
  width: auto;
  height: 100px;
`

export const DivCenter = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`

export const CenteredText = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`
export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 35px;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    font-weight: 300;
  }
`

export const CenteredH1Red = styled(CenteredH1)`
  color: ${colors.red};
`

export const StyledBR = styled.br``

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CenteredH1Green = styled(CenteredH1)`
  color: ${colors.green};
`

export const CenteredH4Green = styled(CenteredH4)`
  color: ${colors.green};
`
export const PflegedienstP = styled.p``

export const PflegedienstPGreen = styled(PflegedienstP)`
  color: ${colors.green};
`

export const ButtonGreen = styled.a`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 25px 25px 25px 25px;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`

export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const DivCenterRow = styled(StyledFooter)`
  background-color: ${colors.white};
  flex-direction: row;
`
