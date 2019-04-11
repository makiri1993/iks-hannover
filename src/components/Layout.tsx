import React from 'react'
import '../styles/app.scss'
import Footer from './Footer'
// import Helmet from 'react-helmet'
// import '../styles/normalize'
import Nav from './Nav'

// import { graphql } from 'gatsby'
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

const Layout: React.SFC<WrapperProps> = ({ children }) => (
  <div className='StyledLayoutRoot'>
    {/* <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    /> */}
    <Nav />
    <main className='StyledLayoutMain'>
      <div className='StyledPage'>{children}</div>
    </main>
    <Footer />
  </div>
)

export default Layout

// export const query = graphql`
//   query IndexLayoutQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         keywords
//       }
//     }
//   }
// `
