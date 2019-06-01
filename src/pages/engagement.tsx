import React from 'react'
import { graphql } from 'gatsby'
import ImgWithLink from '../components/ImgWithLink'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { SimpleData } from './engagement'
import Img, { FluidObject } from 'gatsby-image'

export default ({ data }: { data: SimpleData }) => {
  const { title: eTitle, text: eText } = data.siteData.frontmatter.engagement
  const { title: pTitle, text: pText } = data.siteData.frontmatter.partner
  const { edges: eImages } = data.engagementImages
  const { edges: pImages } = data.partnerImages
  const partnerData = [
    {
      link: 'http://www.zuhause-alles-klar.de/',
      title: 'ZAK zu hause alles klar',
      alt: 'Logo von der ZAK zu hause alles klar',
    },
    {
      link: 'https://zak-pflege-hannover.de/',
      title: 'ZAK Pflege Hannover',
      alt: 'Logo von der ZAK Pflege hannover',
    },
    {
      link: 'http://www.vita-list.de/',
      title: 'Vita List Hannover - Joga - Pilates- Balance',
      alt: 'Logo von der Vita List Hannover',
    },
  ]

  return (
    <>
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              {eTitle}
            </Heading>
          </div>
          <Text preLine>{eText}</Text>
          <div className='FlexDivContentCenterEngagement'>
            {eImages.map((el: { node: { childImageSharp: { fluid: FluidObject | undefined } } }) => (
              <Img className='EngagementImage' fluid={el.node.childImageSharp.fluid} alt='partner logo' />
            ))}
          </div>
          <Heading size={1} center orange fontWeight={500}>
            {pTitle}
          </Heading>
          <Text preLine>{pText}</Text>
          <div className='d-flex justify-space-around FlexDivContentCenterEngagement'>
            {pImages.map((el: { node: { childImageSharp: { fluid: any } } }, index: number) => (
              <ImgWithLink link={partnerData[index].link} title={partnerData[index].title} img={el.node.childImageSharp.fluid} alt={partnerData[index].alt} />
            ))}
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

    partnerImages: allFile(filter: { relativePath: { regex: "/engagementImg/" } }) {
      edges {
        node {
          name
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
