import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const sitemap = () => (
  <Layout>
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
        >
        <Link className='color-red' title='Link zu der Startseite' to='/'>
          Home
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Pflegedienst' to='/pflegedienst'>
          Pflegedienst
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Wohngemeinschaft' to='/wohngemeinschaften'>
          Wohngemeinschaften
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Außerklinische Intensivpflege' to='/intensivpflege'>
          Außerklinische Intensivpflege
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Leitbilder' to='/leitbilder'>
          Leitbilder
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Presse | Archiv' to='/presse-archiv'>
          Presse | Archiv
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Team | Kontakt' to='/team-kontakt'>
          Team | Kontakt
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Jobs | Partner' to='/jobs'>
          Jobs | Partner
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Engagement' to='/engagement'>
          Engagement
        </Link>
      </p>
      <p>
        >
        <Link className='color-red' title='Link zu der Impressum | Anfahrt' to='/impressum'>
          Impressum | Anfahrt
        </Link>
      </p>
    </Container>
  </Layout>
)

export default sitemap
