import React from 'react'
import '../styles/app.scss'
import Footer from './Footer'
// import Helmet from 'react-helmet'
// import '../styles/normalize'
import Nav, { NavItemProps } from './navbar/Nav'

// import { graphql } from 'gatsby'
interface WrapperProps {
  children: React.ReactNode;
  data?: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        keywords: string;
      };
    };
  };
}

const navData: NavItemProps[] = [
  {
    title: 'Home', to: '/', subItems: [
      { title: 'Unser Pflegedienst', to: '/pflegedienst' },
      { title: 'Pflegeleistungen', to: '/pflegeleistungen' },
      { title: 'Beratungsleistungen', to: '/beratungsleistungen' },
    ],
  },
  {
    title: 'Leistungsbereiche', subItems: [
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
    <Nav navData={navData}/>

    <div>{children}</div>
    <Footer/>
  </main>
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
