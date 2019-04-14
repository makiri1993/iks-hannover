import React from 'react'
import { graphql } from 'gatsby'
import ImgWithLink from '../components/ImgWithLink'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { SimpleData } from './engagement'
import Img, { FluidObject } from 'gatsby-image'

// tslint:disable-next-line:no-var-requires
const p1: string = require('../../static/img/engagement/p1.jpg')
// tslint:disable-next-line:no-var-requires
const p2: string = require('../../static/img/engagement/p2.jpg')
// tslint:disable-next-line:no-var-requires
const p3: string = require('../../static/img/engagement/p3.jpg')

export default ({ data }: { data: SimpleData }) => {
  const { title: eTitle, text: eText } = data.siteData.frontmatter.engagement
  const { title: pTitle, text: pText } = data.siteData.frontmatter.partner
  const { edges: eImages } = data.engagementImages

  return (
    <>
      <div className='max-container'>
        <div className='text-container'>
          <div style={{ padding: '2.4rem' }}>
            <Heading size={1} uppercase center orange fontWeight={500}>
              {eTitle}
            </Heading>
          </div>
          <Text preLine>
            {eText}
          </Text>
          <div className='FlexDivContentCenterEngagement'>
            {eImages.map((el: { node: { childImageSharp: { fluid: FluidObject | undefined; }; }; }) => (
              <Img className='EngagementImage' fluid={el.node.childImageSharp.fluid} alt="partner logo" />
            ))}
          </div>
          <Heading size={1} center orange fontWeight={500}>
            {pTitle}
          </Heading>
          <Text preLine>
            {pText}
          </Text>
          <div className='d-flex justify-center'>
            <ImgWithLink link='https://zak-pflege-hannover.de/' title='ZAK Pflege Hannover' img={p1} alt='Logo von der ZAK Pflege hannover' />
            <ImgWithLink link='http://www.zuhause-alles-klar.de/' title='ZAK zu hause alles klar' img={p2} alt='Logo von der ZAK zu hause alles klar' />
            <ImgWithLink link='http://www.vita-list.de/' title='Vita List Hannover - Joga - Pilates- Balance' img={p3} alt='Logo von der Vita List Hannover' />
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_engagement" } }) {
      frontmatter {
        engagement {
          title
          text
        }
        partner {
          title
          text
        }
      }
    }

    engagementImages: allFile(filter: { relativePath: { regex: "/partner/" } }) {
      edges {
        node {
          name
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
