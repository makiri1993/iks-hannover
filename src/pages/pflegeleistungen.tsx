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
          <Heading size={1} uppercase center green fontWeight={500}>
            Unsere Pflegeleistungen
          </Heading>
        </div>
        <Text>
          Seit 1995 gibt es sie nun schon: die gesetzliche Pflegeversicherung. Sie finanziert - wenn auch nur zum Teil - diejenigen Kosten, die entstehen, wenn Versicherte
          pflegebedürftig werden. Voraussetzung dafür ist jedoch, dass der Pflegebedürftige in einen der fünf Pflegegrade (Grad 1-5) eingestuft ist.
        </Text>
        <Text>
          Für alle Patienten, die sich für einen Pflegedienst entscheiden, gilt, dass sie aus dem Niedersächsischen Leistungskomplexkatalog individuell die für sie notwendigen
          pflegerischen Leistungen – Leistungskomplexe genannt – wählen können.
        </Text>
        <Text>
          Übersteigt die Summe der gewählten Leistungskomplexe den Zuschussbetrag der Pflegekasse, muss der so genannte „Eigenanteil“ entweder privat oder über den Träger der
          Sozialsicherung (Stadt oder Region) finanziert werden.
        </Text>
        <Text>
          Über die genauen Kosten informieren wir unsere Patienten und Interessenten grundsätzlich vorab durch schriftliche und unverbindliche Angebote, denn Kostentransparenz ist
          eine Grundvoraussetzung für eine vertrauensvolle Zusammenarbeit.
        </Text>
        <Text>Unser Pflegedienst bietet seine Pflegeleistungen am Patienten in fünf verschiedenen Formaten an:</Text>

        <ul>
          <li className='color-orange'>
            <Text>In der ambulanten Pflege beim Patienten zu Hause</Text>
          </li>
          <li className='color-orange'>
            <Text>In unseren Wohngemeinschaften für Senioren</Text>
          </li>
          <li className='color-orange'>
            <Text>Bei einer intensivpflegerischen 1:1-Versorgung beim Patienten zu Hause </Text>
          </li>
          <li className='color-orange'>
            <Text>In unseren Intensiv-Wohngemeinschaften</Text>
          </li>
          <li className='color-orange'>
            <Text>In unserer Tagespflege im Ahrberg-Viertel in Hannover-Linden</Text>
          </li>
        </ul>
      </div>
    </div>
  </>
)
