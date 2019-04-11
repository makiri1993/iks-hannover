import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title={'Seite nicht gefunden - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Die Seite wurde nicht gefunden. ',
        },
      ]}
    />
    <Container>
      <h1>404: Seite nicht gefunden</h1>
      <p>
        Die Seite wurde nicht gefunden. <Link to='/'>Hier kommen sie zurück.</Link>
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
