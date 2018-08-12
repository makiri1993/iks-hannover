import * as React from 'react'
import Link from 'gatsby-link'

import Page from '../components/Page'
import Container from '../components/Container'
import HeroSlider from '../components/HeroSlider'
import { CenteredH1, CenteredH4, CenteredP, CenteredText } from '../components/StyledComponents'

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
    {/* <Link to="/page-2/" href="/page-2/">
      Go to page 2
    </Link> */}
  </Page>
)
