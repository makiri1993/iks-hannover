import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import React from 'react'
import EmployeeTile from '../components/EmployeeTile'
import FourColumns from '../components/FourColumns'
import Heading from '../components/heading/Heading'
import HeroSlider from '../components/HeroSlider'
import Text from '../components/text/Text'

export interface Edge {
  node: {
    name?: string
    childImageSharp: { fluid: FluidObject }
  }
}

export default ({
  data: {
    heroImages: { edges: heroEdges },
    signatureJasmin,
    signatureGalina,
    imageJasmin,
    imageGalina,
  },
}: {
  data: {
    heroImages: { edges: Edge[] }
    signatureJasmin: { childImageSharp: { fluid: FluidObject } }
    imageJasmin: { childImageSharp: { fluid: FluidObject } }
    signatureGalina: { childImageSharp: { fluid: FluidObject } }
    imageGalina: { childImageSharp: { fluid: FluidObject } }
  }
}) => {
  const transformedHeroImages: FluidObject[] = heroEdges.map(
    ({
      node: {
        childImageSharp: { fluid },
      },
    }: Edge) => fluid,
  )

  return (
    <>
      <HeroSlider images={transformedHeroImages} />
      <div className='max-container'>
        <div className='text-container' style={{ paddingTop: '2.4rem' }}>
          <Heading size={1} uppercase center orange fontWeight={500}>
            Herzlich Willkommen
          </Heading>
          <div style={{ margin: '0.824rem' }}>
            <Heading size={4} center orange fontWeight={500}>
              auf der Homepage des Interkulturellen Sozialdienstes in Hannover
            </Heading>
          </div>
          <Text center>Liebe BesucherInnen,</Text>
          <Text center>
            unsere Internetseite soll Ihnen dabei helfen, sich ein Bild von unserem Pflegedienst zu machen. Hier bekommen Sie Informationen zu ambulanten und medizinischen
            Leistungen, zu unseren Leitbildern, unserem Team und zu Leistungen, die wir zusätzlich anbieten und durch die wir uns von anderen Pflegediensten unterscheiden.
          </Text>
          <Text center>Herzlichst, Ihre</Text>
        </div>
        <div className='employeee-tile-container'>
          <EmployeeTile
            title='Jasmin Arbabian-Vogel'
            alt='Bild von Jasmin Arbabian-Vogel'
            name='Jasmin Arbabian-Vogel'
            job='Geschäftsführerin'
            image={imageJasmin.childImageSharp.fluid}
            signature={signatureJasmin.childImageSharp.fluid}
          />
          <EmployeeTile
            title='Galina Fiksman'
            alt='Bild von Jasmin Galina Fiksman'
            name='Galina Fiksman'
            job='Geschäftsführerin'
            image={imageGalina.childImageSharp.fluid}
            signature={signatureGalina.childImageSharp.fluid}
          />
        </div>
        <FourColumns />
      </div>
    </>
  )
}

export const query = graphql`
  {
    heroImages: allFile(filter: { relativePath: { regex: "/Slider_/" } }) {
      edges {
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    signatureJasmin: file(relativePath: { regex: "/mitarbeiter/unterschrift_Jasmin/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    signatureGalina: file(relativePath: { regex: "/mitarbeiter/unterschrift_Galina/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imageJasmin: file(relativePath: { regex: "/mitarbeiter/mitarbeiter_Jasmin_2/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imageGalina: file(relativePath: { regex: "/mitarbeiter/mitarbeiter_Galina/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
