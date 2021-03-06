import React from 'react'

import Container from '../components/Container'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Container>
    {/* <h1>{data.markdownRemark.frontmatter.title}</h1> */}
    {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
  </Container>
)

export default PageTemplate

// export const query = graphql`
//   query PageTemplateQuery($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         description
//         author {
//           name
//           url
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       frontmatter {
//         title
//       }
//     }
//   }
// `
