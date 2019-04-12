import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'

import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'

export default () => (
  <>
    <Helmet
      title={'Intensivpflege - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} uppercase center blue fontWeight={500}>
            Ambulante Pflege
          </Heading>
        </div>
        <Text>
          Unsere Mitarbeitenden versorgen die Patienten im Rahmen der ärztlichen Verordnungen zu Hause. Die medizinischen Leistungen werden von unserem empathischen und
          professionell ausgebildeten Fachpersonal in Absprache mit den Patienten und deren Angehörigen erbracht.
        </Text>
        <Text>
          Zu den medizinischen Leistungen zählen u.a. das Stellen und Verabreichen von Medikamenten, die Messung von Blutdruck- und Blutzuckerwerten, das Wechseln von Verbänden,
          das An- und Ausziehen von Stützstrümpfen, Injektionen, dermatologische Bäder und sehr spezielle hochtechnische Leistungen wie z.B. das Bedienen von Beatmungsgeräten,
          Infusionstherapien oder die Versorgung von Tracheostoma-Anlagen.
        </Text>
        <Text>
          Für alle medizinischen Leistungen (auch Behandlungspflege genannt), die das ärztliche Fachpersonal verordnet, gilt, dass die Kosten von der Krankenkasse übernommen
          werden, sofern die Verordnung genehmigt wurde.
        </Text>
        <Text>
          Als besonderen Service für unsere Patienten übernehmen wir das gesamte Versorgungsmanagement von der Beschaffung der ärztlichen Verordnung bis zur Einreichung bei der
          jeweiligen Krankenkasse.
        </Text>
        <Text>
          Qualität wird bei uns großgeschrieben. Und deshalb gibt es in unserem Pflegedienst zwei speziell ausgebildete Wundexperten, die den Bereich der Wundversorgung bei unseren
          Patienten übernehmen, sich stets weiterbilden, um auf dem aktuellen Wissenstand zu sein und zudem eng mit dem entsprechenden ärztlichen Fachpersonal zusammenarbeiten.
        </Text>
      </div>
    </div>
  </>
)
