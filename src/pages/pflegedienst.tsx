import React from 'react'
import Helmet from 'react-helmet'
import Heading from '../components/heading/Heading'

import Text from '../components/text/Text'

export default () => (
  <>
    <Helmet
      title={'Pflegedienst - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Informieren Sie sich über unser Angebot und überzeugen Sie sich von unserem Pfelgedienst. Hier finden Sie Informationen zu Pflegegeraden, Pflegedienstleistungen, medizinische Leistungen und Preise.',
        },
      ]}
    />
    <div className='max-container'>
      <div className='text-container'>
        <div style={{ padding: '2.4rem' }}>
          <Heading size={1} center green uppercase fontWeight={500}>
            Unser Pflegedienst
          </Heading>
        </div>
        <Text>
          Mit unserem multinationalen Team leisten wir bereits seit 1996 einen Beitrag zur interkulturellen Pflege für Menschen mit verschiedensten kulturellen, sprachlichen oder
          religiösen Wurzeln. Unsere Patienten sowie ihre Wünsche, Bedürfnisse und Lebenssituationen stehen dabei für uns im Vordergrund und sind uns sehr wichtig.
        </Text>

        <Text>
          Denn schließlich geht es um den Menschen – unabhängig davon, in welcher Lage er sich befindet. Unser Team versorgt mit viel Motivation, Fürsorge, Einfühlungsvermögen und
          fundierten Fachkenntnissen Menschen jeden Alters in der gesamten Region Hannover. Unsere Pflege unterstützt, aktiviert und motiviert; unsere Mitarbeitenden setzen
          Eigeninitiativen frei und stärken die Selbstkompetenzen der ihnen anvertrauten Menschen.
        </Text>
        <Text>
          Unser Handeln definiert sich als „interkulturell“. Für uns ist das „Andere“ dabei nicht das „Fremde“, sondern das „Besondere“. Die Kultur ist die Summe der Werte und
          Traditionen der Gesellschaften. Wir verpflichten uns, die Werte und Traditionen unserer Patienten zu respektieren, auch wenn es nicht die unseren sein mögen.
        </Text>
        <Text>Vertrauen Sie unserem Motto:</Text>

        <Text green>Wir pflegen Menschen...</Text>
        <Text green>...kompetent, flexibel, engagiert.</Text>
        <Text>
          Ein Netzwerk aus unterschiedlichen Anbietern des Gesundheitswesens wie z.B. Ärzte, Sanitätshäuser, Apotheken, Menüdienste etc. ermöglicht es uns, unseren Patienten auch
          Leistungen zu vermitteln, die wir selbst nicht anbieten können.
        </Text>
        <Text>
          Der Interkulturelle Sozialdienst sieht sich in der Verpflichtung, sein Handeln regelmäßig zu überprüfen und überprüfen zu lassen, um eine gleichbleibend hohe
          Pflegequalität zu gewährleisten.
        </Text>
      </div>
    </div>
  </>
)
