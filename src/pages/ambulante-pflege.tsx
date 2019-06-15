import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import { graphql } from 'gatsby'
import { SimpleData } from './pflegeleistungen'
import TextWithImg from '../components/imgText/TextWithImg';

export default ({ data }: { data: SimpleData }) => {
  const { title, text, image } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Intensivpflege - Interkultureller Sozialdienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir bieten eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center green fontWeight={500}>
              {title}
            </Heading>
          </div>
          <TextWithImg image={image} textRight>{text}</TextWithImg>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_ambulante-pflege" } }) {
      frontmatter {
        title
        text
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
