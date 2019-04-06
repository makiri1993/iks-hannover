import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'
import Layout from '../components/Layout'

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
        <CenteredH1Green>UNSER PFLEGEDIENST</CenteredH1Green>
        <PflegedienstP>
          Mit unserem multinationalen Team leisten wir bereits seit 1996 einen Beitrag zur interkulturellen Pflege für Menschen mit
          verschiedensten kulturellen, sprachlichen oder religiösen Wurzeln. Unsere Patienten sowie ihre Wünsche, Bedürfnisse und
          Lebenssituationen stehen dabei für uns im Vordergrund und sind uns sehr wichtig.
          <StyledBR />
          <StyledBR />
          Denn schließlich geht es um den Menschen – unabhängig davon, in welcher Lage er sich befindet. Unser Team versorgt mit viel
          Motivation, Fürsorge, Einfühlungsvermögen und fundierten Fachkenntnissen Menschen jeden Alters in der gesamten Region Hannover.
          Unsere Pflege unterstützt, aktiviert und motiviert; unsere Mitarbeitenden setzen Eigeninitiativen frei und stärken die
          Selbstkompetenzen der ihnen anvertrauten Menschen.
          <StyledBR />
          <StyledBR />
          Unser Handeln definiert sich als „interkulturell“. Für uns ist das „Andere“ dabei nicht das „Fremde“, sondern das „Besondere“. Die
          Kultur ist die Summe der Werte und Traditionen der Gesellschaften. Wir verpflichten uns, die Werte und Traditionen unserer
          Patienten zu respektieren, auch wenn es nicht die unseren sein mögen.
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
        <PflegedienstP>
          Ein Netzwerk aus unterschiedlichen Anbietern des Gesundheitswesens wie z.B. Ärzte, Sanitätshäuser, Apotheken, Menüdienste etc.
          ermöglicht es uns, unseren Patienten auch Leistungen zu vermitteln, die wir selbst nicht anbieten können.
        </PflegedienstP>
        <PflegedienstP>
          Der Interkulturelle Sozialdienst sieht sich in der Verpflichtung, sein Handeln regelmäßig zu überprüfen und überprüfen zu lassen,
          um eine gleichbleibend hohe Pflegequalität zu gewährleisten.
        </PflegedienstP>
      </CenteredText>
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
