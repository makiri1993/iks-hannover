import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'

export default () => (
  <Layout>
    <Helmet
      title={'Tagespflege - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung'
            + ' zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} uppercase center red fontWeight={500}>
            Tagespflege
          </Heading>
        </div>
        <Text>

          GANZ NEU IN LINDEN: Unsere Tagespflege
        </Text>
        <Text>
          Bei der Tagespflege wird älteren Menschen die Möglichkeit geboten, weiter in ihrer privaten Umgebung zu wohnen und somit den Kontakt
          zu Familie und Freunden aufrechtzuerhalten. Zu festgelegten Tageszeiten wird die Pflege und Betreuung von pflegebedürftigen
          Menschen, welche sonst durch die Angehörigen oder einen ambulanten Pflegedienst versorgt werden, übernommen.
        </Text>
        <Text>
          Dabei ist es besonders wichtig, die selbständige Lebensführung der Tagespflegegäste so weit wie möglich zu erhalten und zu fördern.
          Auf diese Weise wird auch die Situation der Angehörigen erleichtert.
        </Text>
        <Heading size={4} uppercase red>FINANZIERUNG</Heading>
        <Text>
          Die Kosten für die Tagespflege werden in Sätzen pro Belegungstag berechnet und bestehen aus den Beträgen für Unterkunft und
          Verpflegung, Betreuungs- und Pflegeleistung, Beförderung sowie Investitionskosten.
        </Text>
        <Text>
          Der Interkulturelle Sozialdienst ist Partner aller Pflegekassen, eine Kostenübernahme für Pflege und Betreuung in der Tagespflege
          ist im Rahmen einer festgestellten Pflegebedürftigkeit daher problemlos möglich. Wir bieten zwei Versorgungsalternativen: Eine
        </Text>
        Unsere Tagespflege befindet sich im Ahrberg-Viertel in Hannover Linden und bietet:
        <ul>
          <li>
            <Text>12 Betreuungsplätze</Text>
          </li>
          <li>
            <Text>Spezielle Angebote für gerontopsychiatrisch und geriatrisch erkrankte Menschen</Text>
          </li>
          <li>
            <Text>Individuelle Betreuung durch qualifiziertes Personal</Text>
          </li>
          <li>
            <Text>Tage- oder wochenweise Belegung</Text>
          </li>
          <li>
            <Text>Fahrdienst inklusive, auch für Rollstuhlfahrer</Text>
          </li>
        </ul>
        <Heading size={4} uppercase red>RÄUMLICHKEITEN</Heading>
        <Text>
          Alle Räume sind hell, modern und behindertengerecht ausgestattet.
        </Text>
        <ul>
          <li>
            <Text>offene Wohnküche</Text>
          </li>
          <li>
            <Text>Wohn- und Aufenthaltsbereich mit TV und gemütlicher Sofaecke</Text>
          </li>
          <li>
            <Text>Ruheraum mit bequemen Liegesesseln</Text>
          </li>
          <li>
            <Text>Ruheraum mit Ruhebetten</Text>
          </li>
          <li>
            <Text>behindertengerechte Toiletten und Bad</Text>
          </li>
          <li>
            <Text>Außenanlagen und ruhiger Garten</Text>
          </li>
        </ul>
        <Text>
          Ihre persönliche Ansprechpartnerin:
        </Text>
        <div className='d-flex align-center'>
          <div style={{ marginRight: '1rem' }}>
            <Heading size={4} red>
              Galina Fiksman
            </Heading>
          </div>
          <Heading size={6}>| Pflegedienstleitung</Heading>
        </div>
        <a className='color-red' href='mailto:fiksman@iks-hannover.de'>
          fiksman@iks-hannover.de
        </a>
        <Text>0511 210 10 44</Text>
      </div>
    </div>
  </Layout>
)
