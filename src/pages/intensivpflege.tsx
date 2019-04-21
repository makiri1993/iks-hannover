import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import { graphql } from 'gatsby'
import { SimpleData } from './intensivpflege'

// tslint:disable-next-line:variable-name no-var-requires
const logo_1: string = require('../../static/img/schriftzug_Wohngemeinschaft.png')
// tslint:disable-next-line:variable-name no-var-requires
const logo_2: string = require('../../static/img/logo_baum.png')
// tslint:disable-next-line:variable-name no-var-requires
const flylerLink: string = require('../../static/img/intensivpflege/IKS-AIWG-Flyer_ku_web.pdf')

export default ({ data }: { data: SimpleData }) => {
  const { title, text_one, text_two, text_three, list_one, list_two, list_three, quote } = data.siteData.frontmatter
  return (
    <>
      <Helmet
        title={'Intensivpflege - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in ' +
              'einer ambulant betreuten Wohngemeinschaft.',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center red fontWeight={500}>
              {title}
            </Heading>
          </div>
          <Text>
            {/* Wir bieten zwei Versorgungsalternativen: Eine
          <strong> intensivpflegerische Versorgung zu Hause</strong> oder in einer unserer ambulant betreuten
          <strong> Wohngemeinschaften</strong> für Menschen mit intensivpflegerischem Bedarf. */}
            {text_one}
          </Text>
          <Text>
            <a className='color-red' target='_blank' title='link zu Flyer Intensivpflege' href={flylerLink}>
              Unseren Flyer finden Sie hier.
            </a>
          </Text>
          <Text preLine>{text_two}</Text>

          <ul>
            {list_one.list_items.map((el: any) => (
              <li className='color-red'>
                <Text>{el.item}</Text>
              </li>
            ))}
          </ul>
          <Heading size={4} red uppercase>
            {list_two.title}
          </Heading>

          <ul>
            {list_two.list_items.map((el: any) => (
              <li className='color-red'>
                <Text>{el.item}</Text>
              </li>
            ))}
          </ul>
          <Text>
            <blockquote className='color-red'>
              {quote.text}
              <Text>{quote.author}</Text>
            </blockquote>
          </Text>
          <Heading size={4} red uppercase>
            {list_three.title}
          </Heading>
          <ul>
            {list_three.list_items.map((el: any) => (
              <li className='color-red'>
                <Text>{el.item}</Text>
              </li>
            ))}
          </ul>
          <Text>Für eine umfassende Beratung sowie zu allen Fragen rund um die Finanzierung stehen wir Ihnen gerne zur Verfügung.</Text>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} red>
                Marion Hartmann
              </Heading>
            </div>
            <Heading size={6}>| Leitung der Intensivpflege</Heading>
          </div>
          <a className='color-red' href='mailto:hartmann@iks-hannover.de'>
            hartmann@iks-hannover.de
          </a>
          <div className='d-flex align-center'>
            <div style={{ marginRight: '1rem' }}>
              <Heading size={4} red>
                Marco Schillaci
              </Heading>
            </div>
            <Heading size={6}>| Fachliche Leitung</Heading>
          </div>
          <a className='color-red' href='mailto:schillaci@iks-hannover.de'>
            schillaci@iks-hannover.de
          </a>
          <div className='DivCenter'>
            <img className='StyledIMGIntensiv' alt='Logo der Wohngemeinschaft List' title='Wohngemeinschaft List' src={logo_1} />
            <img className='StyledIMGIntensiv' alt='Logo der Wohngemeinschaft List' title='Wohngemeinschaft List' src={logo_2} />
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_intensivpflege" } }) {
      frontmatter {
        title
        text_one
        text_two
        list_one {
          title
          list_items {
            item
          }
        }
        list_two {
          title
          list_items {
            item
          }
        }
        quote {
          author
          text
        }
        list_three {
          title
          list_items {
            item
          }
        }
      }
    }
  }
`
