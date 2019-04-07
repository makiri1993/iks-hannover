import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { colors } from '../styles/variables'
import { CenteredText, StyledLI } from './intensivpflege'

export default () => (
  <Layout>
    <Page>
      <Helmet
        title={'Jobs, Kooperationen und Partner - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content: 'Die Seite unserer Stellenangebote und Informationen über den Bundesfreiwilligendienst, Kooperationen und Partner.',
          },
        ]}
      />
      <CenteredH1Orange>JOBS</CenteredH1Orange>
      <CenteredText>
        <PflegedienstP>
          Wir wachsen weiter und freuen uns immer über Ihre Initiativbewerbung bei uns! Wir suchen examiniertes Pflegepersonal (ggf. mit
          Zusatzausbildung „Intensiv“) sowie Pflegehelfer*innen und Hauswirtschaftskräfte.
          <StyledBR />
          <StyledBR />
          Die Einsatzbereiche sind dabei extrem vielfältig –Sie möchten gerne unser ambulantes Team unterstützen? Oder Sie gehen in der
          Betreuung unserer Demenzpatienten in den Wohngemeinschaften auf? Eine Stelle in der Schaltzentrale unseres Pflegedienstes spricht
          Ihr Organisationstalent an? Sie wünschen die Herausforderung im Intensivbereich?
          <StyledBR />
          <StyledBR />
          Ob Vollzeit oder Teilzeit, Minijob oder Nachtdienst – wir sind stolz darauf, unsere Mitarbeiter entsprechend ihrer Fähigkeiten und
          Wünsche einzusetzen. So legen wir gemeinsam die Basis für eine langfristige und vorteilhafte Partnerschaft auf beiden Seiten. Wir
          suchen für unseren Bereich der Außerklinischen Intensivpflege examiniertes Pflegepersonal und freuen uns auf Ihre Bewerbung.
        </PflegedienstP>
        <div style={{ textDecoration: 'underline' }}>Wir bieten Ihnen:</div>
        <StyledUL>
          <StyledLI>
            <StyledSpan>familiäres Arbeitsklima in einem motivierten Team</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>wertschätzende Führungskultur</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>einen sicheren Arbeitsplatz in einem etablierten Unternehmen</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>umfangreiche Fort- und Weiterbildungsmöglichkeiten</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>pünktliche und leistungsgerechte Lohnzahlungen</StyledSpan>
          </StyledLI>
        </StyledUL>
        <div style={{ textDecoration: 'underline' }}>Sie bringen mit:</div>
        <StyledUL>
          <StyledLI>
            <StyledSpan>Freude am Umgang mit Menschen</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Empathievermögen und Sensibilität</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Verantwortungsbewusstsein</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Zuverlässigkeit</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Teamfähigkeit</StyledSpan>
          </StyledLI>
        </StyledUL>
        <PflegedienstP>
          Bitte lassen Sie uns Ihre vollständigen Bewerbungsunterlagen gerne per Email an
          <a href='mailto:iks-hannover@iks-hannover.de'> iks-hannover@iks-hannover.de</a> zukommen.
        </PflegedienstP>
        <H4Orange>Aktuelle Angebote</H4Orange>
        <StyledBR />
        <POrange style={{ textDecoration: 'underline' }}>Ausbildung Pflegefachmann/-frau</POrange>
        <PflegedienstP>
          Wir sind ein anerkannter Ausbildungsbetrieb. Bei uns können Sie Ihre Ausbildung zum Pflegefachmann/-frau absolvieren. Im Rahmen
          der schulischen Ausbildung kooperieren wir mit den folgenden Pflegefachschulen:
        </PflegedienstP>
        <StyledUL>
          <StyledLI>
            <StyledSpan>Pflegecampus Hannover</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>KRH Akademie</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Fresenius Schule</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Diakovere Schule</StyledSpan>
          </StyledLI>
          <StyledLI>
            <StyledSpan>Pflegefachschule Hannover in Garbsen</StyledSpan>
          </StyledLI>
        </StyledUL>
        <PflegedienstP>
          Wenn ein Schulvertrag mit einer anderen Schule vorliegt, kann auch mit dieser Schule für die Ausbildung ein Kooperationsvertrag
          mit uns geschlossen werden.
        </PflegedienstP>
        <POrange style={{ textDecoration: 'underline' }}>Praktikum</POrange>
        <PflegedienstP>
          Sie suchen im Rahmen Ihrer Ausbildung einen Praktikumsplatz? Fragen Sie gerne bei uns an. Wir kooperieren unter anderem mit den
          Ausbildungsbereichen der MHH und der Anna-Siemsen-Schule. Sie schnuppern in unsere verschiedenen Unternehmensbereiche rein und
          können so einen guten Eindruck von den verschiedenen Einsatzmöglichkeiten in der Pflege bekommen.
        </PflegedienstP>
        <POrange>Bundesfreiwilligendienst</POrange>
        <PflegedienstP>Unser Betrieb ist anerkannte Bundesfreiwilligendienststelle mit der Kapazität von zwei Plätzen.</PflegedienstP>
      </CenteredText>
    </Page>
  </Layout>
)

export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 770px) {
    flex-direction: column-reverse;
  }
`

export const DivCenterCol = styled(StyledFooter)`
  background-color: ${colors.white};
`
export const StyledFooterDiv = styled.div`
  text-align: left;
  width: 500px;
  @media only screen and (max-width: 770px) {
    width: auto;
  }
`

export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-bottom: 50px;
  margin-top: 50px;
  @media only screen and (max-width: 890px) {
    font-weight: 300px;
  }
`

export const CenteredH1Orange = styled(CenteredH1)`
  color: ${colors.orange};
`

export const H4Orange = styled.h4`
  color: ${colors.orange};
`

export const PflegedienstP = styled.p``
export const POrange = styled(PflegedienstP)`
  color: ${colors.orange};
`

export const StyledBR = styled.br``

export const StyledUL = styled.ul``

export const StyledLIOrange = styled.li`
  color: ${colors.orange};
`

export const StyledSpan = styled.span`
  color: ${colors.black};
  font-size: 16px;
`
export const DivCenterRow = styled(StyledFooter)`
  background-color: ${colors.white};
  flex-direction: row;
`
