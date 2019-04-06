import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'
import Layout from '../components/Layout'

const link1: string = require('../images/pflegedienst/Tabelle_Pflegegrade.jpg')
const link2: string = require('../images/pflegedienst/Preise_Pflegedienstleistungen.jpg')
const link3: string = require('../images/pflegedienst/MedizinischePflege.jpg')

export default () => (
  <Layout>
    <Page>
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
      <CenteredText>
        <CenteredH1Green>PFLEGEDIENST</CenteredH1Green>
        <CenteredH4Green>Was bedeutet eigentlich Pflege?</CenteredH4Green>
        <PflegedienstP>
          Es geschieht oft ganz plötzlich: Ein Mensch erkrankt an Demenz oder er ist körperlich nicht mehr in der Lage, seinen Alltag zu
          meistern. „Und wer pflegt Oma?“ ist dann die häufige Frage innerhalb einer Familie. Von jetzt auf gleich muss ein Angehöriger
          gepflegt werden – keine leichte Aufgabe.
          <StyledBR />
          <StyledBR />
          „Wir tun alles, um den auf Hilfe oder Assistenz angewiesenen Menschen die bestmögliche Versorgung zu verschaffen, sie zu
          unterstützen und deren Angehörige auf die verantwortungsvolle Aufgabe vorzubereiten“, sagt Jasmin Arbabian-Vogel. Die
          Geschäftsführerin des Unternehmens weiß, wie schwer es sein kann, wie viele Bedenken oder Berührungsängste jemand vielleicht haben
          mag, der in eine solche Situation gerät.
          <StyledBR />
          <StyledBR />
          Pflege ist eine Dienstleistung. Sie soll den Menschen in seinen Besonderheiten beachten. Sie ist die Summe unserer Fähigkeiten,
          Techniken und emotionalen Eigenschaften und ist damit niemals lediglich Pflege am Körper, sondern immer auch Pflege am Menschen in
          seiner Gesamtheit.
          <StyledBR />
          <StyledBR />
          Der Interkulturelle Sozialdienst sieht sich in der Verpflichtung, sein Handeln regelmäßig zu überprüfen und überprüfen zu lassen,
          um eine gleichbleibend hohe Pflegequalität zu gewährleisten.
          <StyledBR />
          <StyledBR />
          Denn schließlich geht es um den Menschen – unabhängig davon, in welcher Lage er sich befindet. Unser Team versorgt mit viel
          Motivation, Fürsorge, Einfühlungsvermögen und fundierten Fachkenntnissen Menschen jeden Alters in der gesamten Region Hannover.
          Unsere Pflege unterstützt, aktiviert und motiviert; unsere Mitarbeiter setzen Eigeninitiativen frei und stärken die
          Selbstkompetenzen der ihnen anvertrauten Menschen.
          <StyledBR />
          <StyledBR />
          Vertrauen Sie unserem Motto:
          <StyledBR />
        </PflegedienstP>
        <PflegedienstPGreen>
          Wir pflegen Menschen...
          <StyledBR />
          ...kompetent, flexibel, engagiert.
        </PflegedienstPGreen>
        <CenteredH1Green>PFLEGE</CenteredH1Green>
        <PflegedienstPGreen>
          Seit 1995 gibt es sie nun schon: die gesetzliche Pflegeversicherung, verankert im elften Sozialgesetzbuch (SGB XI). Sie ist die
          vierte Säule des Gesundheitssystems und finanziert - wenn auch nur zum Teil - diejenigen Kosten, die entstehen, wenn Versicherte
          pflegebedürftig werden. Voraussetzung dafür ist jedoch, dass der Pflegebedürftige in einen der fünf Pflegegrade (Grad 1-5)
          eingestuft ist.
        </PflegedienstPGreen>
        <PflegedienstP>
          Aus nachfolgender Tabelle ist ersichtlich, wie hoch der jeweilige aktuelle Pflegekassenzuschuss in den drei Pflegestufen ist, wenn
          der Pflegebedürftige einen Pflegedienst in Anspruch nimmt (Sachleistung), sich von Angehörigen, Freunden oder Nachbarn pflegen
          lässt (Pflegegeld) oder in eine stationäre Einrichtung zieht:
        </PflegedienstP>
      </CenteredText>
      <FlexDivContentCenter>
        <DivCenterRow>
          <ButtonGreen title='Pflegerade' href={link1}>
            PFLEGEGERADE
          </ButtonGreen>
          <ButtonGreen title='Preise für Pflegedienstleistungen' href={link2}>
            PFLEGEDIENSTLEISTUNGEN
          </ButtonGreen>
        </DivCenterRow>
      </FlexDivContentCenter>
      <CenteredText>
        <PflegedienstP>
          Für alle Kunden, die sich für einen Pflegedienst entscheiden, gilt, dass sie aus dem Niedersächsischen Leistungskomplexkatalog
          individuell die für sie notwendigen pflegerischen Leistungen – Leistungskomplexe genannt – wählen können.
          <StyledBR />
          <StyledBR />
          Übersteigt die Summe der gewählten Leistungskomplexe den Zuschussbetrag der Pflegekasse, muss der so genannte „Eigenanteil“
          entweder privat oder über den Träger der Sozialsicherung (Stadt oder Region) finanziert werden.
          <StyledBR />
          <StyledBR />
          Über die genauen Kosten informieren wir unsere Kunden und Interessenten grundsätzlich vorab durch schriftliche und unverbindliche
          Angebote, denn Kostentransparenz ist eine Grundvoraussetzung für eine vertrauensvolle Zusammenarbeit.
          <StyledBR />
          <StyledBR />
        </PflegedienstP>
        <CenteredH1Green>MEDIZINISCHE LEISTUNGEN</CenteredH1Green>
        <StyledBR />
        <PflegedienstP>
          Zu den medizinischen Leistungen zählen u.a. das Stellen und Verabreichen von Medikamenten, die Messung von Blutdruck- und
          Blutzuckerwerten, das Wechseln von Verbänden, das An- und Ausziehen von Stützstrümpfen, Injektionen, dermatologische Bäder und
          sehr spezielle hochtechnische Leistungen wie z.B. das Bedienen von Beatmungsgeräten, Infusionstherapien oder die Versorgung von
          Tracheostoma-Anlagen.
          <StyledBR />
          <StyledBR />
          Für alle medizinischen Leistungen (auch Behandlungspflege genannt), die der Haus- oder Facharzt verordnet, gilt, dass die Kosten
          von der Krankenkasse übernommen werden, sofern die Verordnung genehmigt wurde.
          <StyledBR />
          <StyledBR />
          Als besonderen Service für unsere Kunden übernehmen wir das gesamte Versorgungsmanagement von der Beschaffung der ärztlichen
          Verordnung bis zur Einreichung bei der jeweiligen Krankenkasse.
          <StyledBR />
          <StyledBR />
        </PflegedienstP>
        <CenteredH4Green>WISSENSWERTES</CenteredH4Green>
        <PflegedienstP>
          Qualität wird bei uns großgeschrieben. Und deshalb gibt es in unserem Pflegedienst zwei speziell ausgebildete Wundexperten, die
          den Bereich der Wundversorgung bei unseren Kunden übernehmen, sich stets weiterbilden, um auf dem aktuellen Wissenstand zu sein
          und zudem eng mit den entsprechenden Haus- und Fachärzten zusammenarbeiten.
        </PflegedienstP>
        <StyledBR />
      </CenteredText>
      <DivCenterRow>
        <ButtonGreen title='Link zu den medizinischen Leistungen' href={link3}>
          MEDIZINISCHE LEISTUNGEN
        </ButtonGreen>
      </DivCenterRow>
    </Page>
  </Layout>
)

export const PRed = styled.p`
  font-style: italic;
  color: ${colors.red};
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    justify-items: center;
    justify-content: center;
  }
`

export const CenteredText = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  padding: 2.4rem;
`

export const StyledBR = styled.br``

export const CenteredH1Green = styled(CenteredH1)`
  color: ${colors.green};
`

export const CenteredH4Green = styled(CenteredH4)`
  color: ${colors.green};
`
export const PflegedienstP = styled.p``

export const PflegedienstPGreen = styled(PflegedienstP)`
  color: ${colors.green};
`

export const ButtonGreen = styled.a`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 25px 25px 25px 25px;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 25px;
  }
`

export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const DivCenterRow = styled(StyledFooter)`
  background-color: ${colors.white};
  flex-direction: row;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
