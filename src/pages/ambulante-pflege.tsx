import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import { graphql } from 'gatsby'
import { SimpleData } from './pflegeleistungen'
import TextWithImg from '../components/imgText/TextWithImg'

interface AmbulantepflegeData {
  siteData: {
    frontmatter: {
      title: string
      text: string
      textLeft: string
      image?: object
      imageLeft?: object
    }
  }
}

export default ({ data }: { data: AmbulantepflegeData }) => {
  const { title, text, image, imageLeft, textLeft } = data.siteData.frontmatter
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
          <TextWithImg image={imageLeft} textLeft>{textLeft}</TextWithImg>
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
        textLeft
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageLeft {
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
