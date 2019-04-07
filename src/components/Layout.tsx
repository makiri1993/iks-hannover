import * as React from 'react'
import '../styles/app.scss'
import Footer from './Footer'
// import Helmet from 'react-helmet'
// import '../styles/normalize'
import Header from './Header'
import LayoutMain from './LayoutMain'
import LayoutRoot from './LayoutRoot'

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
  <LayoutRoot>
    {/* <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    /> */}
    <Header />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
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
