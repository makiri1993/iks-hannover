import React from 'react'
import { Helmet } from 'react-helmet'
import Heading from '../components/heading/Heading'

import Text from '../components/text/Text'

export default () => (
  <>
    <Helmet
      title={'Wohngemeinschaften - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Wenn Sie nicht in ein Alterheim ziehen möchten bieten Ihnen unsere Wohngemeinschaften in Hannover eine sehr gute Alternative. Unsere Pflegedienst kümmert sich dort um alle Ihre Anliegen.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} uppercase center blue fontWeight={500}>
            Wohngemeinschaften
          </Heading>
        </div>
        <Text>
          Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, bieten sich unsere Wohngemeinschaften in den Stadtteilen Roderbruch, List, Davenstedt, Stöcken und
          Burg als Alternative an.
        </Text>
        <Text>Die Seniorenwohngemeinschaften im Roderbruch und in der List bestehen aus einer jeweils sehr geräumigen Wohnung mit mehreren Balkonen.</Text>
        <Text>Die Seniorenwohngemeinschaft in Davenstedt befindet sich in einem wunderschönen alten Fachwerkhaus mit großem Garten.</Text>
        <Text>In Stöcken liegt die WG in einem eigenen Hausanbau mit Garten, Versorgungsräumlichkeiten, mehreren Toiletten und individuellen Räumen für die Bewohner.</Text>
        <Text>In Burg leben die Mieter in einem schönen Bungalow mit eigener Terrasse zusammen.</Text>
        <Text>Unsere Wohnobjekte sind zum größten Teil barrierefrei.</Text>
        <Text>
          Diese Wohngemeinschaften richten sich an Senioren, die aus den unterschiedlichsten Gründen nicht mehr allein zuhause leben können, etwa aufgrund einer demenziellen
          Erkrankung.
        </Text>
        <Text>
          Wir garantieren eine 24-Stunden-Betreuung: Jede Wohngemeinschaft wird rund um die Uhr durch qualifizierte und engagierte Arbeitskräfte unseres Pflegedienstes betreut.
        </Text>
        <Text>
          Im Unterschied zum Alten- und Pflegeheim findet in den Wohngemeinschaften ein ganz normales Alltagsleben statt, in das sich die Mieter der Wohngemeinschaft einbringen
          können. Die Organisation des Haushaltes, gemeinsame Aktivitäten und die notwendigen pflegerischen wie betreuerischen Tätigkeiten werden von den Arbeitskräften unseres
          Pflegedienstes begleitet bzw. durchgeführt.
        </Text>
        <Text>
          Die familiäre Atmosphäre einer Seniorenwohngemeinschaft wirkt sich insbesondere positiv auf den Verlauf einer demenziellen Erkrankung und auf die psychische und
          körperliche Verfassung der Mieter aus. Die aufrecht erhaltene oder hinzugewonnene Lebensqualität wird von allen Mietern der Wohngemeinschaften und deren Angehörigen als
          positivstes Merkmal des gemeinschaftlichen Lebens empfunden.
        </Text>
        <Text>Für eine umfassende Beratung und Besichtigung sowie zu allen Fragen rund um die Finanzierung stehen wir Ihnen gern zur Verfügung.</Text>
        <div className='d-flex align-center'>
          <div style={{ marginRight: '1rem' }}>
            <Heading size={4} blue>
              Galina Fiksman
            </Heading>
          </div>
          <Heading size={6}>| Pflegedienstleitung</Heading>
        </div>
        <a className='color-blue' href='mailto:fiksmann@iks-hannover.de'>
          fiksmann@iks-hannover.de
        </a>
      </div>
    </div>
  </>
)
