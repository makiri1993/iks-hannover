import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import TextWithImg from '../components/imgText/TextWithImg'

interface TagespflegeData {
  siteData: {
    frontmatter: {
      title: string
      text_one: string
      image_one?: object
      text_two: string
      image_two?: object
    }
  }
}

export default ({ data }: { data: TagespflegeData }) => {
  const { title, text_one, image_one, text_two, image_two } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Tagespflege - Interkultureller Sozialdienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Hier finden Sie alles zur Finanzierung, Leistungen und den Räumlichkeiten für die Tagespflege. Bei der Tagespflege können Sie in ihrer privaten Umgebung wohnen.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              {title}
            </Heading>
          </div>
          <TextWithImg image={image_one} textRight>{text_one}</TextWithImg>
          <TextWithImg image={image_two} textLeft>{text_two}</TextWithImg>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} orange>
                Galina Fiksmann
              </Heading>
            </div>
            <Heading size={6}>| Pflegedienstleitung</Heading>
          </div>
          <a className='color-orange' href='mailto:fiksman@iks-hannover.de'>
            fiksmann@iks-hannover.de
          </a>
          <Text>0511 210 10 44</Text>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_tagespflege" } }) {
      frontmatter {
        title
        text_one
        image_one {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text_two
        image_two {
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
