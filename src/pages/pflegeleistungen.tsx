import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import { SimpleData } from './pflegeleistungen'

export interface SimpleData {
  siteData: {
    frontmatter: {
      title: string
      text: string
      list_one: {
        list_items: [{ item: String }]
      }
    }
  }
}

export default ({ data }: { data: SimpleData }) => {
  const { title, text, list_one } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Pflegedienst - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Informieren Sie sich über unser Angebot und überzeugen Sie sich von unserem Pfelgedienst. Hier finden Sie Informationen zu Pflegegeraden, Pflegedienstleistungen, medizinische Leistungen und Preise.',
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
          <ul>
            {list_one.list_items.map(el => (
              <li className='color-green'>
                <Text>{el.item}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_pflegeleistungen" } }) {
      frontmatter {
        title
        text
        list_one {
          list_items {
            item
          }
        }
      }
    }
  }
`
