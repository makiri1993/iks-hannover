import * as React from 'react'
// import Link from 'gatsby-link'

import Page from '../components/Page'
import HeroSlider from '../components/HeroSlider'
import EmployeeTile from '../components/EmployeeTile'
import FourColumns from '../components/FourColumns'
import styled from 'styled-components'
import { breakpoints } from '../styles/variables'


const signatureJasmin: string = require('../images/mitarbeiter/unterschrift_Jasmin.png')
const jasminImage: string = require('../images/mitarbeiter//Mitarbeiter_Jasmin_2.jpg')
const signatureGalina: string = require('../images/mitarbeiter/unterschrift_Galina.png')
const galinaImage: string = require('../images/mitarbeiter/Galina.jpg')

export default () => (
  <Page>
    <HeroSlider />
    <CenteredText>
      <CenteredH1>HERZLICH WILLKOMMEN</CenteredH1>
      <CenteredH4>auf der Homepage des Interkulturellen Sozialdienstes in Hannover</CenteredH4>
      <CenteredP>Liebe BesucherInnen,</CenteredP>
      <CenteredP>
        unsere Internetseite soll Ihnen dabei helfen, sich ein Bild von unserem Pflegedienst zu machen. Hier bekommen Sie Informationen zu
        ambulanten und medizinischen Leistungen, zu unseren Leitbildern, unserem Team und zu Leistungen, die wir zusätzlich anbieten und
        durch die wir uns von anderen Pflegediensten unterscheiden. Hier können Sie unsere Informationsbroschüre auf Deutsch, Türkisch,
        Farsi oder Russisch herunter laden.
      </CenteredP>
      <CenteredP>Herzlichst, Ihre</CenteredP>
    </CenteredText>
    <FlexDivContentCenter>
      <EmployeeTile
        title="Jasmin Arbabian-Vogel"
        alt="Bild von Jasmin Arbabian-Vogel"
        name={'Jasmin Arbabian-Vogel'}
        job={'Geschäftsführerin'}
        image={jasminImage}
        signature={signatureJasmin}
      />
      <EmployeeTile
        title="Jasmin Galina Fiksman"
        alt="Bild von Jasmin Galina Fiksman"
        name={'Galina Fiksman'}
        job={'Geschäftsführerin'}
        image={galinaImage}
        signature={signatureGalina}
      />
    </FlexDivContentCenter>
    <FourColumns />
    {/* <Link to="/page-2/" href="/page-2/">
      Go to page 2
    </Link> */}
  </Page>
)

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    justify-items: center;
    justify-content: center;
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
  padding: 2.4rem;
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const CenteredP = styled.p`
  text-align: center;
`
