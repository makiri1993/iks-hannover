import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'
import Layout from '../components/Layout'

// tslint:disable-next-line:variable-name no-var-requires
const logo_1: string = require('../images/icons/Schriftzug_Wohngemeinschaft.png')
// tslint:disable-next-line:variable-name no-var-requires
const logo_2: string = require('../images/icons/logo_baum.png')
// tslint:disable-next-line:variable-name no-var-requires
const flylerLink: string = require('../images/intensivpflege/IKS-AIWG-Flyer_ku_web.pdf')

export default () => (
  <Layout>
    <Helmet
      title={'Intensivpflege - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in '
            + 'einer ambulant betreuten Wohngemeinschaft.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} uppercase center red fontWeight={500}>
            Außerklinische Intensivpflege
          </Heading>
        </div>
        <Text>
          Wir bieten zwei Versorgungsalternativen: Eine
          <strong> intensivpflegerische Versorgung zu Hause</strong> oder in
          einer unserer ambulant betreuten
          <strong>Wohngemeinschaften</strong> für Menschen mit
          intensivpflegerischem Bedarf.
        </Text>
        <Text>
          <a
            className='color-red'
            target='_blank'
            title='link zu Flyer Intensivpflege'
            href={flylerLink}
          >
            Unseren Flyer finden Sie hier.
          </a>
        </Text>
        <Text>
          Jeder Mensch hat nicht nur die Möglichkeit, sondern auch den
          rechtlichen Anspruch auf eine adäquate Versorgung im Rahmen der
          häuslichen Krankenpflege. So kann der Wunsch vieler Betroffener, in
          den eigenen vier Wänden leben zu wollen, verwirklicht werden. Wir
          stimmen Therapie und ambulante Versorgung mit unseren kompetenten
          Teams und Ihrem ärztlichen Fachpersonal auf Ihre Wünsche und die
          Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
        </Text>
        <Text>
          Wir können Ihnen helfen, den Wunsch, in den eigenen vier Wänden leben
          zu wollen, zu verwirklichen.
        </Text>
        <ul>
          <li className='color-red'>
            <Text>ein Leben in Ihrer vertrauten Umgebung</Text>
          </li>
          <li className='color-red'>
            <Text>eine Versorgung rund um die Uhr</Text>
          </li>
          <li className='color-red'>
            <Text>einfühlsame und rücksichtsvolle Begleitung</Text>
          </li>
          <li className='color-red'>
            <Text>Unterstützung im Alltag</Text>
          </li>
          <li className='color-red'>
            <Text>Vermeidung von Infektionen</Text>
          </li>
          <li className='color-red'>
            <Text>Vermeidung von Krankenhausaufenthalten</Text>
          </li>
          <li className='color-red'>
            <Text>
              bedarfsgerechte Versorgung unter Berücksichtigung Ihrer
              individuellen Lebensgewohnheiten
            </Text>
          </li>
        </ul>
        <Heading size={4} red uppercase>
          Pflegerische Leistung
        </Heading>
        <ul>
          <li className='color-red'>
            <Text>Überwachung der invasiven und nicht-invasiven Beatmung</Text>
          </li>
          <li className='color-red'>
            <Text>Erhebung von Vitalwerten und Beatmungsparametern</Text>
          </li>
          <li className='color-red'>
            <Text>Sauerstofftherapie</Text>
          </li>
          <li className='color-red'>
            <Text>EKG und CO² Überwachung</Text>
          </li>
          <li className='color-red'>
            <Text>Beatmungspflege mit Trachealkanülenmanagement</Text>
          </li>
          <li className='color-red'>
            <Text>Ernährungstherapie mit PEG, PEJ Versorgung</Text>
          </li>
          <li className='color-red'>
            <Text>Infusionstherapie mit Portversorgung</Text>
          </li>
          <li className='color-red'>
            <Text>Wund- und Schmerzmanagement</Text>
          </li>
          <li className='color-red'>
            <Text>Fachliche Anleitung von Patienten und Angehörigen</Text>
          </li>
          <li className='color-red'>
            <Text>Individuelles Notfallmanagement</Text>
          </li>
        </ul>
        <Text>
          <blockquote className='color-red'>
            „Ich kann mir keinen Zustand denken, der mir unerträglicher und
            schauerlicher wäre, als mit schmerzerfüllter Seele der Fähigkeit
            beraubt zu sein, ihr Ausdruck zu verleihen.“
            <Text>
              Michel de Montaigne (1533 - 1592), französischer Philosoph{' '}
            </Text>
          </blockquote>
        </Text>
        <Heading size={4} red uppercase>
          Weitere Leistungen
        </Heading>
        <ul>
          <li className='color-red'>
            <Text>Pflegefachberatung</Text>
          </li>
          <li className='color-red'>
            <Text>Entlassungsmanagement</Text>
          </li>
          <li className='color-red'>
            <Text>Vermittlung von Pflegehilfsmitteln und Medizintechnik</Text>
          </li>
          <li className='color-red'>
            <Text>
              fachpflegerische und sozialkompetente Versorgung und Betreuung
            </Text>
          </li>
          <li className='color-red'>
            <Text>Beatmungspflege mit Trachealkanülenmanagement</Text>
          </li>
          <li className='color-red'>
            <Text>Entwicklung individueller Therapiekonzepte</Text>
          </li>
          <li className='color-red'>
            <Text>Kooperation mit weiteren Dienstleistern</Text>
          </li>
          <li className='color-red'>
            <Text>Fort- und Weiterbildung unseres Fachpersonals</Text>
          </li>
        </ul>
        <Text>
          Für eine umfassende Beratung sowie zu allen Fragen rund um die
          Finanzierung stehen wir Ihnen gerne zur Verfügung.
        </Text>
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
          <img
            className='StyledIMGIntensiv'
            alt='Logo der Wohngemeinschaft List'
            title='Wohngemeinschaft List'
            src={logo_1}
          />
          <img
            className='StyledIMGIntensiv'
            alt='Logo der Wohngemeinschaft List'
            title='Wohngemeinschaft List'
            src={logo_2}
          />
        </div>
      </div>
    </div>
  </Layout>
)
