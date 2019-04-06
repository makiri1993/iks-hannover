import * as React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Container from '../components/Container'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Page>
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
          Die Seite wurde nicht gefunden.{' '}
          <Link to='/' href='/'>
            Hier kommen sie zurück.
          </Link>
        </p>
      </Container>
    </Page>
  </Layout>
)

export default NotFoundPage
