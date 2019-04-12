import React, { Component } from 'react'
import EmployeeTile from '../components/EmployeeTile'

import Heading from '../components/heading/Heading'
import Mitarbeiter from '../components/models/Mitarbeiter'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  data: any
}

export default class Team extends Component<Props> {
  private mitarbeiter: Mitarbeiter[] = []
  constructor(props: Props) {
    super(props)
    const {
      mitarbeiterImages: { edges },
    } = this.props.data

    this.mitarbeiter = [
      new Mitarbeiter({
        index: 0,
        title: 'Galina Fiksman',
        alt: 'Bild von Galina Fiksman',
        firstName: 'Galina',
        lastName: 'Fiksman',
        job: 'Geschäftsführung',
        email: 'fiksmann@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 1,
        title: 'Jasmin Arbabian-Vogel',
        alt: 'Bild von Jasmin Arbabian-Vogel',
        firstName: 'Jasmin',
        lastName: 'Arbabian-Vogel',
        job: 'Geschäftsführung',
        email: 'arbabian-vogel@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 2,
        title: 'Tabea Emrich',
        alt: 'Bild von Tabea Emrich',
        firstName: 'Tabea',
        lastName: 'Emrich',
        job: 'Assistenz der  Geschäftsführung',
        email: 'emrich@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 3,
        title: 'Ute Rhein',
        alt: 'Bild von Ute Rhein',
        firstName: 'Ute',
        lastName: 'Rhein',
        job: 'Pflegedienstleitung',
        email: 'rhein@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 4,
        title: 'Marion Hartmann',
        alt: 'Bild von Marion Hartmann',
        firstName: 'Marion',
        lastName: 'Hartmann',
        job: 'Leitungs Intensivpflege Intensivwohngemeinschaft',
        email: 'hartmann@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 5,
        title: 'Marco Schillaci',
        alt: 'Bild von Marco Schillaci',
        firstName: 'Marco',
        lastName: 'Schillaci',
        job: 'Fachliche Leitung Intensivpflege',
        email: 'schillaci@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 6,
        title: 'Jurek Jablonski',
        alt: 'Bild von Jurek Jablonski',
        firstName: 'Jurek',
        lastName: 'Jablonski',
        job: 'Praxisanleiter  und Mentor',
        email: 'jablonski@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 7,
        title: 'Birgit Anspach',
        alt: 'Bild von Birgit Anspach',
        firstName: 'Birgit',
        lastName: 'Anspach',
        job: 'Planung  und Personal',
        email: 'anspach@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 8,
        title: 'Joanna Russ',
        alt: 'Bild von Joanna Russ',
        firstName: 'Joanna',
        lastName: 'Russ',
        job: 'Teamassistenz',
        email: 'iks-hannover@iks-hannover.de',
      }).setImage(edges),
      new Mitarbeiter({
        index: 9,
        title: 'Ardi Rezaie',
        alt: 'Bild von Ardi Rezaie',
        firstName: 'Ardi',
        lastName: 'Rezaie',
        job: 'Fuhrparkmanagement',
        email: 'rezaie@iks-hannover.de',
      }).setImage(edges),
    ]
  }

  render() {
    const {
      imageTeam: {
        childImageSharp: { fluid },
      },
    } = this.props.data
    return (
      <>
        <div style={{ paddingTop: '2.4rem' }}>
          <Heading size={1} center orange uppercase fontWeight={500}>
            Unser Team
          </Heading>
        </div>
        <div className='max-container'>
          <div className='team-container'>
            {this.mitarbeiter.map(({ getTitle, getAlt, getName, getJob, getImage, getEmail }, index) => (
              <div key={index} className='ml-5rem'>
                <EmployeeTile team title={getTitle} alt={getAlt} name={getName} job={getJob} image={getImage} email={getEmail} />
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
    mitarbeiterImages: allFile(filter: { relativePath: { regex: "/mitarbeiter/mitarbeiter/" } }) {
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

    imageTeam: file(relativePath: { regex: "/mitarbeiter/team/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
