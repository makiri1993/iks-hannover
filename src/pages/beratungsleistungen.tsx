import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'
import Layout from '../components/Layout'
import Text from '../components/text/Text'

export default () => (
  <Layout>
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
          <Heading size={1} uppercase center green fontWeight={500}>
            Unsere Beratungsleistung
          </Heading>
        </div>
        <Text>
          Es geschieht oft ganz plötzlich: Ein Mensch erkrankt an Demenz oder er ist körperlich nicht mehr in der Lage, seinen Alltag zu
          meistern. „Und wer pflegt Oma?“ ist dann die häufige Frage innerhalb einer Familie. Von jetzt auf gleich muss ein Angehöriger
          gepflegt werden – keine leichte Aufgabe.
        </Text>
        <Text>
          „Wir tun alles, um den auf Hilfe oder Assistenz angewiesenen Menschen die bestmögliche Versorgung zu verschaffen, sie zu
          unterstützen und deren Angehörige auf die verantwortungsvolle Aufgabe vorzubereiten“, sagt Jasmin Arbabian-Vogel. Die
          Geschäftsführerin des Unternehmens weiß, wie schwer es sein kann, wie viele Bedenken oder Berührungsängste jemand vielleicht haben
          mag, der in eine solche Situation gerät.
        </Text>
      </div>
    </div>
  </Layout>
)
