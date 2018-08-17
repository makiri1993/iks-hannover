import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Container from '../components/Container'
import { LinkRed } from '../components/StyledComponents'

const NotFoundPage = () => (
  <Page>
    <Helmet
      title={'Verzeichnis - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Auf dieser Seite finden Sie eine Übersicht zu allen Seiten des interkulturellen Pflegedienst Hannover . '
        }
      ]}
    />
    <Container>
      <h1>Inhaltsverzeichnis</h1>
      <p>> <LinkRed title="Link zu der Startseite" href="/">Home</LinkRed></p>
      <p>> <LinkRed title="Link zu der Pflegedienst" href="/pflegedienst">Pflegedienst</LinkRed></p>
      <p>> <LinkRed title="Link zu der Wohngemeinschaft" href="/wohngemeinschaften">Wohngemeinschaften</LinkRed></p>
      <p>> <LinkRed title="Link zu der Außerklinische Intensivpflege" href="/intensivpflege">Außerklinische Intensivpflege</LinkRed></p>
      <p>> <LinkRed title="Link zu der Leitbilder" href="/leitbilder">Leitbilder</LinkRed></p>
      <p>> <LinkRed title="Link zu der Presse | Archiv" href="/presse-archiv">Presse | Archiv</LinkRed></p>
      <p>> <LinkRed title="Link zu der Team | Kontakt" href="/">Team | Kontakt</LinkRed></p>
      <p>> <LinkRed title="Link zu der Jobs | Partner" href="/jobs">Jobs | Partner</LinkRed></p>
      <p>> <LinkRed title="Link zu der Engagement" href="/">Engagement</LinkRed></p>
      <p>> <LinkRed title="Link zu der Impressum | Anfahrt" href="/impressum">Impressum | Anfahrt</LinkRed></p>
    </Container>
  </Page>
)

export default NotFoundPage
