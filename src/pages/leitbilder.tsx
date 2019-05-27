import React from 'react'
import { Helmet } from 'react-helmet'
import Heading from '../components/heading/Heading'
import Text from '../components/text/Text'

export default () => {
  return (
    <>
      <Helmet
        title={'Leitbilder - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Leitbilder',
          },
        ]}
      />
      <div className='max-container'>
        <div className='text-container'>
          <div className='padding-heading'>
            <Heading size={1} uppercase center orange fontWeight={500}>
              Leitbilder
            </Heading>
          </div>
          <Heading size={3} orange fontWeight={500}>
            Pflegebild
            </Heading>
          <Heading size={5} orange fontWeight={500}>
            Der Mensch
            </Heading>
          <Text preLine>
            Die Würde jedes Menschen ist unantastbar. Wir verpflichten uns, den Menschen zu achten, zu pflegen und zu versorgen - ungeachtet seiner Hautfarbe, Herkunft, Religion, Sprache und Kultur. Diese Prämisse gilt nicht nur für die von uns betreuten Patienten, deren Angehörige und alle Mitarbeiter, sondern für alle Menschen.
            </Text>
          <Heading size={5} orange fontWeight={500}>
            Das Handeln
            </Heading>
          <Text preLine>
            Wir verpflichten uns des ganzheitlichen Handels nach dem biographischen Ansatz.
            Wir möchten dort anknüpfen, wo der Mensch meint zu stehen. Wir akzeptieren und respektieren dadurch verschiedene vorhandene Realitäten, die nicht unserer Realität entsprechen müssen. Die Realität des Patienten ist die Grundlage unserer Realität im Pflegeprozess. Pflegeprozess ist immer auch „Pflege-im-Prozess“ und damit „Pflege in Beziehung“.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Die Kultur
            </Heading>
          <Text preLine>
            Unsere Interaktion definiert sich als „interkulturell“. Wir sind nicht „Mittler“ zwischen den Kulturen, sondern „Zeugen“ der Kulturen. Wir werden bestehende und funktionierende Strukturen weder ändern noch zerstören, damit das „Andere“ auch anders bleiben kann. Wir als Pflegende verpflichten uns, die Werte und Traditionen unserer Patienten in den Pflegeprozess einzubeziehen und zu respektieren, auch wenn es nicht die unseren sind.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Die Motive
            </Heading>
          <Text preLine>
            Wir begründen unser Handeln auf der Basis dieser Motive:
          </Text>
          <ul>
            <li className='color-orange'>
              <Text>
                Bestehende Defizite in der Versorgung Pflegebedürftiger insbesondere Nicht-Deutscher Patienten zu beheben.
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                Eine Konzeption von Pflege zu entwickeln, die mehr sein kann als „warm, satt, sauber“, und die psycho-sozialen Aspekte sowie die
      	        religiös-kulturellen Gegebenheiten der Patienten mit einschließt.
            </Text>
            </li>
          </ul>
          <Heading size={5} orange fontWeight={500}>
            Das Produkt
            </Heading>
          <Text preLine>
            Unser Produkt ist die „Pflege“. Unsere Pflege soll unterstützen, Eigeninitiativen freisetzen, Selbstkompetenzen akzeptieren, aktivieren und motivieren. Unsere Pflege soll kulturkongruent sein und das Individuum mensch in seinen Besonderheiten beachten. Sie ist die Summe unserer Fähigkeiten, Techniken und emotionalen Eigenschaften. Damit ist sie niemals nur Pflege am Körper, sondern Pflege am Menschen in seiner Gesamtheit. Wir verpflichten uns, unser Handeln regelmäßig zu überprüfen und zu verbessern um eine ständige Qualitätssicherung zu gewährleisten.
          </Text>
          {/* ########################################################## */}
          <Heading size={3} orange fontWeight={500}>
            Unternehmensbild
            </Heading>
          <Heading size={5} orange fontWeight={500}>
            Der Betrieb
            </Heading>
          <Text preLine>
            Unser Betrieb ist die Summe unseres Handelns, unserer Wünsche und unserer Vorstellung von Pflege und Arbeit.
            Wir sind bestrebt, eine Transparenz für den Betrieb zu schaffen, die sowohl nach innen wie auch nach außen sichtbar ist.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Unser Team
            </Heading>
          <Text preLine>
            wir sind professionell, weil:
          </Text>
          <ul>
            <li className='color-orange'>
              <Text>
                wir verschiedene Qualifikationen besitzen
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir vielfältig sind in Sprachen und Nationalitäten
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir ein Team von gleichwertigen Menschen sind
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir uns denselben Zielen verpflichtet haben
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir auch anerkennen, dass wir eigene Grenzen haben
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir unsere Grenzen akzeptieren
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir diese Grenzen als Chance nutzen, im Austausch unser eigenes Handeln zu überprüfen und zu ändern
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                wir damit niemals dort verharren, wo wir gerade stehen.
              </Text>
            </li>
          </ul>
          <Heading size={5} orange fontWeight={500}>
            Unsere Verpflichtungen
            </Heading>
          <Text preLine>
            Unser Handeln definiert sich als „interkulturell“. Für uns ist das „Andere“ dabei nicht das „Fremde“, sondern das „Besondere“. Die Kultur ist die Summe der Werte und Traditionen der Gesellschaften. Wir verpflichten uns, die Werte und Traditionen unserer Patienten zu respektieren, auch wenn es nicht die unseren sind. Wir begründen unser Handeln auf der Basis dieser Motive:
          </Text>
          <ul>
            <li className='color-orange'>
              <Text>
                Neue Arbeits- und Organisationsformen zu entwickeln, um unsere Ideal-Vorstellungen von „Arbeit“ zu verwirklichen.
              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                Durch unser tägliches Handeln die Gesellschaft zu sensibilisieren für die Bereiche „Alter“, „Pflege“ und „Migration“. Damit möchten wir einen aktiven Beitrag gegen Ausgrenzung und Rassismus leisten.              </Text>
            </li>
            <li className='color-orange'>
              <Text>
                Wir verpflichten uns dem Prinzip des respektierenden Umgangs miteinander, in einem Gewalt-, Sexismus-, Rassismus-, und vorurteilsfreien Raum.
              </Text>
            </li>
          </ul>
          {/* ########################################################## */}
          <Heading size={3} orange fontWeight={500}>
            Führungsbild
            </Heading>
          <Heading size={5} orange fontWeight={500}>
            Nachhaltigkeit
            </Heading>
          <Text preLine>
            Oberstes Ziel der Unternehmensführung ist, eine stetige Verbesserung unserer Dienstleistung zu erreichen, um konkurrenzfähig zu bleiben und Arbeitsplätze erhalten sowie neue schaffen zu können.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Motivierung
            </Heading>
          <Text preLine>
            Die Haltung der Führungskräfte dieses Unternehmens ist eine wertschätzende und vor allem motivierende Haltung, die die Fähigkeiten der Mitarbeiter wahrnimmt, ihre Stärken fördert und sie entsprechend ihrer besonderen Fähigkeiten einsetzt.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Förderung
            </Heading>
          <Text preLine>
            Um eine stetige Förderung der Mitarbeiter zu gewährleisten, setzen die Führungskräfte des Unternehmens wirkungsvolle Programme zur Schulung und Fortbildung der Mitarbeiter fest.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Furchtfreies Arbeitsklima
          </Heading>
          <Text preLine>
            Alle in diesem Unternehmen arbeitenden Menschen sind verpflichtet, einen respektierlichen und wertschätzenden Umgang miteinander zu pflegen. Die leitenden Mitarbeiter des Unternehmens sind verpflichtet, ein Arbeitsklima zu schaffen, das von gegenseitigem Vertrauen geprägt und frei von Angst und Repression ist.
          </Text>
          <Heading size={5} orange fontWeight={500}>
            Kreativität
          </Heading>
          <Text preLine>
            Die Unternehmensführung ist bestrebt, das eigene Handeln und die eigene Denkweise stets auf Richtigkeit zu überprüfen und ggf. zu neuem Handeln und neuen Denkweisen zu gelangen. Dies ist elementarer Teil der Verantwortung, die der Unternehmensführung zukommt.
          </Text>
        </div>
      </div>
    </>
  )
}
