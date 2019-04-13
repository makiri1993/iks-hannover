import React from 'react'
import { Helmet } from 'react-helmet'
import Heading from '../components/heading/Heading'

import Text from '../components/text/Text'
import { SimpleData } from './pflegeleistungen'
import { graphql } from 'gatsby'

export default ({ data }: { data: SimpleData }) => {
  const { title, text } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Wohngemeinschaften - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Wenn Sie nicht in ein Alterheim ziehen möchten bieten Ihnen unsere Wohngemeinschaften in Hannover eine sehr gute Alternative. Unsere Pflegedienst kümmert sich dort um alle Ihre Anliegen.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div style={{ padding: '2.4rem' }}>
            <Heading size={1} uppercase center blue fontWeight={500}>
              {title}
            </Heading>
          </div>

          <Text preLine>{text}</Text>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} blue>
                Galina Fiksman
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
        text
      }
    }
  }
`
