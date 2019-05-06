import React from 'react'
import { Helmet } from 'react-helmet'
import Heading from '../components/heading/Heading'

import Text from '../components/text/Text'
import { SimpleData } from './pflegeleistungen'
import { graphql } from 'gatsby'

export default ({ data }: { data: SimpleData }) => {
  return (
    <>
      <Helmet
        title={'Stellenanzeigen - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Sie sind auf Job suche ? Hier finden Sie die aktuellen Stellenausschreibungen des Interkulturellen Sozialdienstes Hannover. Bewerben Sie sich!',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              Stellenangebote
            </Heading>

          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    jobs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/stellen/" } }) {
      edges {
        node {
          frontmatter {
            title
            text
          }
        }
      }
    }
  }
`
