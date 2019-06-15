import React from 'react'
import Helmet from 'react-helmet'

import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'

export default () => (
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
          Wir wachsen weiter und freuen uns immer über Ihre Initiativbewerbung bei uns! Wir suchen examiniertes Pflegepersonal (ggf. mit Zusatzausbildung „Intensiv“) sowie
          Pflegehelfer*innen und Hauswirtschaftskräfte.
        </Text>
        <Text>
          Die Einsatzbereiche sind dabei extrem vielfältig –Sie möchten gerne unser ambulantes Team unterstützen? Oder Sie gehen in der Betreuung unserer Demenzpatienten in den
          Wohngemeinschaften auf? Eine Stelle in der Schaltzentrale unseres Pflegedienstes spricht Ihr Organisationstalent an? Sie wünschen die Herausforderung im Intensivbereich?
        </Text>
        <Text>
          Ob Vollzeit oder Teilzeit, Minijob oder Nachtdienst – wir sind stolz darauf, unsere Mitarbeiter entsprechend ihrer Fähigkeiten und Wünsche einzusetzen. So legen wir
          gemeinsam die Basis für eine langfristige und vorteilhafte Partnerschaft auf beiden Seiten. Wir suchen für unseren Bereich der Außerklinischen Intensivpflege examiniertes
          Pflegepersonal und freuen uns auf Ihre Bewerbung.
        </Text>
        <Text underline>Wir bieten Ihnen:</Text>
        <ul>
          <li className='color-orange'>
            <Text>familiäres Arbeitsklima in einem motivierten Team</Text>
          </li>
          <li className='color-orange'>
            <Text>wertschätzende Führungskultur</Text>
          </li>
          <li className='color-orange'>
            <Text>einen sicheren Arbeitsplatz in einem etablierten Unternehmen</Text>
          </li>
          <li className='color-orange'>
            <Text>umfangreiche Fort- und Weiterbildungsmöglichkeiten</Text>
          </li>
          <li className='color-orange'>
            <Text>pünktliche und leistungsgerechte Lohnzahlungen</Text>
          </li>
        </ul>
        <Text underline>Sie bringen mit:</Text>
        <ul>
          <li className='color-orange'>
            <Text>Freude am Umgang mit Menschen</Text>
          </li>
          <li className='color-orange'>
            <Text>Empathievermögen und Sensibilität</Text>
          </li>
          <li className='color-orange'>
            <Text>Verantwortungsbewusstsein</Text>
          </li>
          <li className='color-orange'>
            <Text>Zuverlässigkeit</Text>
          </li>
          <li className='color-orange'>
            <Text>Teamfähigkeit</Text>
          </li>
        </ul>
        <Text>
          Bitte lassen Sie uns Ihre vollständigen Bewerbungsunterlagen gerne per Email an
          <a className='color-orange' href='mailto:iks-hannover@iks-hannover.de'>
            {' '}
            iks-hannover@iks-hannover.de
          </a>{' '}
          zukommen.
        </Text>
        <Heading size={4} orange>
          Aktuelle Angebote
        </Heading>
        <Text orange>
          Ausbildung Pflegefachmann/-frau
        </Text>
        <Text>
          Wir sind ein anerkannter Ausbildungsbetrieb. Bei uns können Sie Ihre Ausbildung zum Pflegefachmann/-frau absolvieren. Im Rahmen der schulischen Ausbildung kooperieren wir
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
        <Text orange>
          Praktikum
        </Text>
        <Text>
          Sie suchen im Rahmen Ihrer Ausbildung einen Praktikumsplatz? Fragen Sie gerne bei uns an. Wir kooperieren unter anderem mit den Ausbildungsbereichen der MHH und der
          Anna-Siemsen-Schule. Sie schnuppern in unsere verschiedenen Unternehmensbereiche rein und können so einen guten Eindruck von den verschiedenen Einsatzmöglichkeiten in der
          Pflege bekommen.
        </Text>
        <Text orange>
          Bundesfreiwilligendienst
        </Text>
        <Text>Unser Betrieb ist anerkannte Bundesfreiwilligendienststelle mit der Kapazität von zwei Plätzen.</Text>
      </div>
    </div>
  </>
)
