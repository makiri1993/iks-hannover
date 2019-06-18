import React from 'react'
import { Helmet } from 'react-helmet'
import Heading from '../components/heading/Heading'
import TextWithImg from '../components/imgText/TextWithImg'
import { graphql } from 'gatsby'

interface Data {
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

export default ({ data }: { data: Data }) => {
  const { title, text_one, text_two, image_one, image_two } = data.siteData.frontmatter

  return (
    <>
      <Helmet
        title={'Wohngemeinschaften - Interkultureller Sozialdienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Wenn Sie nicht in ein Alterheim ziehen möchten bieten Ihnen unsere Wohngemeinschaften in Hannover eine sehr gute Alternative. Unserer Pflegedienst kümmert sich dort um Ihre Anliegen.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center blue fontWeight={500}>
              {title}
            </Heading>
          </div>
          <TextWithImg image={image_one} textRight>{text_one}</TextWithImg>
          <TextWithImg image={image_two} textLeft>{text_two}</TextWithImg>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} blue>
                Galina Fiksmann
              </Heading>
            </div>
            <Heading size={6}>| Pflegedienstleitung</Heading>
          </div>
          <a className='color-blue' href='mailto:fiksmann@iks-hannover.de'>
            fiksmann@iks-hannover.de
          </a>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_wohngemeinschaften" } }) {
      frontmatter {
        title
        text_one
        text_two
        image_one {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
