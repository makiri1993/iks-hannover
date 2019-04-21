import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import { SimpleData } from './pflegeleistungen'

export default ({ data }: { data: SimpleData }) => {
  const { title, text } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Intensivpflege - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
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
          <Text preLine>{text}</Text>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_beratungsleistungen" } }) {
      frontmatter {
        title
        text
      }
    }
  }
`
