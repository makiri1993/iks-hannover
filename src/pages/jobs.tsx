import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import JobTile from '../components/jobTile/JobTile'
import Image from '../components/img/Image'

interface Props {
  jobs: { edges: any }
  data: {
    jobs: {
      edges: [
        {
          node: {
            fields: {
              slug: string
            }
            frontmatter: {
              title: number
              text: string
            }
          }
        }
      ]
    }
  }
}

export default ({ data }: { data: Props }) => {
  const { edges: jobs } = data.jobs
  return(
  <>
    <Helmet
      title={'Jobs - Interkultureller Sozialdienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Auf dieser Seite finden Sie Informationen zu aktuellen Stellen und Praktikums- und Ausbildungsmöglichkeiten',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div className='padding-heading'>
          <Heading size={1} uppercase center orange fontWeight={500}>
            Jobs
          </Heading>
        </div>
        <Text>
          Wir wachsen weiter und freuen uns immer über deine Initiativbewerbung bei uns! Wir suchen examiniertes Pflegepersonal (ggf. mit Zusatzausbildung „Intensiv“) sowie
          Pflegehelfer*innen und Hauswirtschaftskräfte.
        </Text>
        <Text>
          Die Einsatzbereiche sind dabei extrem vielfältig –Du möchtest gerne unser ambulantes Team unterstützen? Oder du gehst in der Betreuung unserer Demenzpatienten in den
          Wohngemeinschaften auf? Eine Stelle in der Schaltzentrale unseres Pflegedienstes spricht dein Organisationstalent an? Du wünschst die Herausforderung im Intensivbereich?
        </Text>
        <Text>
          Ob Vollzeit oder Teilzeit, Minijob oder Nachtdienst – wir sind stolz darauf, unsere Mitarbeiter entsprechend ihrer Fähigkeiten und Wünsche einzusetzen. So legen wir
          gemeinsam die Basis für eine langfristige und vorteilhafte Partnerschaft auf beiden Seiten.
        </Text>
        <Text>
          Bitte lasse uns jederzeit deine vollständigen Bewerbungsunterlagen gerne per Email an
          <a className='color-orange' href='mailto:iks-hannover@iks-hannover.de'>
            {' '}
            iks-hannover@iks-hannover.de
          </a>{' '}
          zukommen.
        </Text>
        <br />
        <Image alt='Bild eines Geschenks' imageName='geschenke.png' maxWidth={300} />
        <Image alt='Bild einer Linie' imageName='line.png' maxWidth={1000} hideOnMobile/>
        <br />
        <Heading size={3} orange fontWeight={500}>
          In unseren aktuellen Angeboten findest du außerdem konkret zu besetzende Stellen:
        </Heading>
        <br />
        <div className='flex'>
            {jobs.map((job: { node: { frontmatter: { title: string | undefined; text: string | undefined }; fields: { slug: string | undefined } } }, index: number) => (
              <JobTile key={index} headingSize={4} title={job.node.frontmatter.title} text={job.node.frontmatter.text} link={job.node.fields.slug} />
            ))}
          </div>
        <Image alt='Bild eines Geldsacks' position='right' imageName='geldsack.png' maxWidth={300}/>
        <Image alt='Bild einer Linie' imageName='line-left.png' maxWidth={1000} hideOnMobile/>
        <br />
          <Heading size={4} orange fontWeight={500}>
            Ausbildung Pflegefachmann/-frau
          </Heading>
        <Text>
          Wir sind ein anerkannter Ausbildungsbetrieb. Bei uns kannst du deine Ausbildung zum Pflegefachmann/-frau absolvieren. Im Rahmen der schulischen Ausbildung kooperieren wir
          mit den folgenden Pflegefachschulen:
        </Text>
        <ul>
          <li className='color-orange'>
            <Text>Pflegecampus Hannover</Text>
          </li>
          <li className='color-orange'>
            <Text>KRH Akademie</Text>
          </li>
          <li className='color-orange'>
            <Text>Fresenius Schule</Text>
          </li>
          <li className='color-orange'>
            <Text>Diakovere Schule</Text>
          </li>
          <li className='color-orange'>
            <Text>Pflegefachschule Hannover in Garbsen</Text>
          </li>
        </ul>
        <Text>Wenn ein Schulvertrag mit einer anderen Schule vorliegt, kann auch mit dieser Schule für die Ausbildung ein Kooperationsvertrag mit uns geschlossen werden.</Text>
        <Image alt='Bild eines Stetoskop' imageName='stetoskop.png' maxWidth={300} />
        <Image alt='Bild einer Linie' imageName='line.png' maxWidth={1000} hideOnMobile/>
        <Heading size={4} orange fontWeight={500}>
          Praktikum
        </Heading>
        <Text>
          Du suchst im Rahmen deiner Ausbildung einen Praktikumsplatz? Frage gerne bei uns an. Wir kooperieren unter anderem mit den Ausbildungsbereichen der MHH und der
          Anna-Siemsen-Schule. Du schnupperst in unsere verschiedenen Unternehmensbereiche rein und kannst so einen guten Eindruck von den verschiedenen Einsatzmöglichkeiten in der
          Pflege bekommen.
        </Text>
        <Heading size={4} orange fontWeight={500}>
          Bundesfreiwilligendienst
        </Heading>
        <Text>Unser Betrieb ist anerkannte Bundesfreiwilligendienststelle mit der Kapazität von zwei Plätzen.</Text>
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
          fields {
            slug
          }
          frontmatter {
            title
            text
          }
        }
      }
    }
  }
`
