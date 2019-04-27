import React from 'react'
import '../styles/app.scss'
import Footer from './Footer'
// import Helmet from 'react-helmet'
// import '../styles/normalize'
import Nav from './navbar/Nav'
import { NavItemProps } from './navbar/NavItem'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
// import { graphql } from 'gatsby'

const logo = require('../../static/img/logo_iks.svg')

interface WrapperProps {
  children: React.ReactNode
  data?: {
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string
      }
    }
  }
}

const navData: NavItemProps[] = [
  {
    title: 'Home',
    to: '/',
    subItems: [
      { title: 'Unser Pflegedienst', to: '/pflegedienst' },
      { title: 'Pflegeleistungen', to: '/pflegeleistungen' },
      { title: 'Beratungsleistungen', to: '/beratungsleistungen' },
    ],
  },
  {
    title: 'Leistungsbereiche',
    subItems: [
      { title: 'Ambulante Pflege', to: '/ambulante-pflege' },
      { title: 'Wohngemeinschaften', to: '/wohngemeinschaften' },
      { title: 'Außerklinische Intensivpflege', to: '/intensivpflege' },
      { title: 'Tagespflege', to: '/tagespflege' },
    ],
  },
  { title: 'Team', to: '/team' },
  { title: 'Jobs', to: '/jobs' },
  { title: 'Engagement | Partner', to: '/engagement' },
  { title: 'Presse', to: '/presse' },
]

// tslint:disable-next-line:variable-name
const Layout: React.SFC<WrapperProps> = ({ children }) => (
  <main>
    {/* <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    /> */}
    {/* <div style={{ marginBottom: '3rem' }}>Diese Seite befindet sich aktuell im Umbau und wird in Kürze wieder zür Verfügung stehen.</div>{' '}
    <div style={{ fontWeight: 800 }}>Falls Sie mit uns Kontakt aufnehmen wollen, können Sie uns unter dieser Nummer erreichen!</div>
    <div>TEL: 0511 / 210 10 44</div> */}
    <div className='d-flex justify-center'>
      <img className='navbar-logo' src={logo} alt='logo of iks hannover' />
    </div>
    <Nav navData={navData} />
    <div style={{ minHeight: '70vh' }}>{children}</div>
    <Footer />
  </main>
)

export default Layout
