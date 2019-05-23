import React, { Component } from 'react'
import EmployeeTile from '../components/EmployeeTile'
import Heading from '../components/heading/Heading'
import Mitarbeiter from '../components/models/Mitarbeiter'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

interface Props {
  data: {
    employees: {
      edges: [
        {
          node: {
            frontmatter: {
              position: number
              firstname: string
              lastname: string
              role: string
              email: string
              image: { childImageSharp: { fluid: FluidObject } }
            }
          }
        }
      ]
    }
    imageTeam: { childImageSharp: { fluid: FluidObject } }
  }
}

export default class Team extends Component<Props> {
  private mitarbeiter: Mitarbeiter[] = []
  constructor(props: Props) {
    super(props)
    const {
      employees: { edges },
    } = this.props.data
    this.mitarbeiter = edges.map(
      ({
        node: {
          frontmatter: {
            position: index,
            firstname: firstName,
            lastname: lastName,
            role: job,
            email,
            image: {
              childImageSharp: { fluid: image },
            },
          },
        },
      }) => new Mitarbeiter({ index, alt: 'Bild von Mitarbeiter', firstName, lastName, job, email, image }),
    )
  }

  render() {
    const {
      imageTeam: {
        childImageSharp: { fluid },
      },
    } = this.props.data
    return (
      <>
        <div className='padding-heading'>
          <Heading size={1} center orange uppercase fontWeight={500}>
            Unser Team
          </Heading>
        </div>
        <div className='max-container'>
          <div className='team-container'>
            {this.mitarbeiter.map(({ getAlt, getName, getJob, getImage, getEmail }, index) => (
              <div key={index} className='ml-5rem'>
                <EmployeeTile team alt={getAlt} name={getName} job={getJob} image={getImage} email={getEmail} />
              </div>
            ))}
          </div>
          <Img style={{ marginBottom: '3rem', marginTop: '3rem' }} fluid={fluid} alt='Bild vom Team' />
        </div>
      </>
    )
  }
}

export const query = graphql`
  {
    employees: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/employee/" } }, sort: { order: ASC, fields: [frontmatter___position] }) {
      edges {
        node {
          frontmatter {
            position
            firstname
            lastname
            role
            email
            image {
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
    }
    imageTeam: file(relativePath: { regex: "/team/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// {
//   mitarbeiterImages: allFile(filter: { relativePath: { regex: "/mitarbeiter/mitarbeiter/" } }) {
//     edges {
//       node {
//         name
//         childImageSharp {
//           # Specify the image processing specifications right in the query.
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }

// }
