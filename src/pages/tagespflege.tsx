import React from 'react'
import Helmet from 'react-helmet'

import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import { SimpleData } from './pflegeleistungen'

interface TagespflegeData {
  siteData: {
    frontmatter: {
      title: string
      text_one: string
      list_one: {
        title: string
        text: string
        list_items: [
          {
            item: string
          }
        ]
      }
      list_two: {
        title: string
        text: string
        list_items: [
          {
            item: string
          }
        ]
      }
    }
  }
}

export default ({ data }: { data: TagespflegeData }) => {
  const { title, text_one, list_one, list_two } = data.siteData.frontmatter

  const { title: listOneTitle, text: listOneText, list_items: listItemsListOne } = list_one
  const { title: listTwoTitle, text: listTwoText, list_items: listItemsListTwo } = list_two
  return (
    <>
      <Helmet
        title={'Tagespflege - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung' +
              ' zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div style={{ padding: '2.4rem' }}>
            <Heading size={1} uppercase center red fontWeight={500}>
              {title}
            </Heading>
          </div>
          <Text preLine>{text_one}</Text>
          <Heading size={4} uppercase red>
            {listOneTitle}
          </Heading>
          <Text preLine>{listOneText}</Text>
          <ul>
            {listItemsListOne.map(({ item }: { item: string }) => (
              <li className='color-red'>
                <Text>{item}</Text>
              </li>
            ))}
          </ul>
          <Heading size={4} uppercase red>
            {listTwoTitle}
          </Heading>
          <Text preLine>{listTwoText}</Text>
          <ul>
            {listItemsListTwo.map(({ item }: { item: string }) => (
              <li className='color-red'>
                <Text>{item}</Text>
              </li>
            ))}
          </ul>
          <Text>Ihre persönliche Ansprechpartnerin:</Text>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} red>
                Galina Fiksman
              </Heading>
            </div>
            <Heading size={6}>| Pflegedienstleitung</Heading>
          </div>
          <a className='color-red' href='mailto:fiksman@iks-hannover.de'>
            fiksman@iks-hannover.de
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
        list_one {
          title
          text
          list_items {
            item
          }
        }
        list_two {
          title
          text
          list_items {
            item
          }
        }
      }
    }
  }
`
