import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

const Sitemap = () => (
  <Layout>
    <Page>
      <Helmet
        title={'Verzeichnis - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content: 'Auf dieser Seite finden Sie eine Übersicht zu allen Seiten des interkulturellen Pflegedienst Hannover . ',
          },
        ]}
      />
      <Container>
        <h1>Inhaltsverzeichnis</h1>
        <p>
          >{' '}
          <LinkRed title='Link zu der Startseite' to='/'>
            Home
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Pflegedienst' to='/pflegedienst'>
            Pflegedienst
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Wohngemeinschaft' to='/wohngemeinschaften'>
            Wohngemeinschaften
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Außerklinische Intensivpflege' to='/intensivpflege'>
            Außerklinische Intensivpflege
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Leitbilder' to='/leitbilder'>
            Leitbilder
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Presse | Archiv' to='/presse-archiv'>
            Presse | Archiv
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Team | Kontakt' to='/team-kontakt'>
            Team | Kontakt
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Jobs | Partner' to='/jobs'>
            Jobs | Partner
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Engagement' to='/engagement'>
            Engagement
          </LinkRed>
        </p>
        <p>
          >{' '}
          <LinkRed title='Link zu der Impressum | Anfahrt' to='/impressum'>
            Impressum | Anfahrt
          </LinkRed>
        </p>
      </Container>
    </Page>
  </Layout>
)

export default Sitemap

export const LinkRed = styled(Link)`
  color: ${colors.red};
`
