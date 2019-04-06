import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'
import Layout from '../components/Layout'
import { StyledUL, StyledLIOrange, StyledSpan } from './jobs'

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
          Seit 1995 gibt es sie nun schon: die gesetzliche Pflegeversicherung. Sie finanziert - wenn auch nur zum Teil - diejenigen Kosten,
          die entstehen, wenn Versicherte pflegebedürftig werden. Voraussetzung dafür ist jedoch, dass der Pflegebedürftige in einen der
          fünf Pflegegrade (Grad 1-5) eingestuft ist.
          <StyledBR />
          <StyledBR />
          Für alle Patienten, die sich für einen Pflegedienst entscheiden, gilt, dass sie aus dem Niedersächsischen Leistungskomplexkatalog
          individuell die für sie notwendigen pflegerischen Leistungen – Leistungskomplexe genannt – wählen können.
          <StyledBR />
          <StyledBR />
          Übersteigt die Summe der gewählten Leistungskomplexe den Zuschussbetrag der Pflegekasse, muss der so genannte „Eigenanteil“
          entweder privat oder über den Träger der Sozialsicherung (Stadt oder Region) finanziert werden.
          <StyledBR />
          <StyledBR />
          Über die genauen Kosten informieren wir unsere Patienten und Interessenten grundsätzlich vorab durch schriftliche und
          unverbindliche Angebote, denn Kostentransparenz ist eine Grundvoraussetzung für eine vertrauensvolle Zusammenarbeit.
          <StyledBR />
          <StyledBR />
          Unser Pflegedienst bietet seine Pflegeleistungen am Patienten in fünf verschiedenen Formaten an:
          <StyledUL>
            <StyledLIOrange>
              <StyledSpan>In der ambulanten Pflege beim Patienten zu Hause</StyledSpan>
            </StyledLIOrange>
            <StyledLIOrange>
              <StyledSpan>In unseren Wohngemeinschaften für Senioren</StyledSpan>
            </StyledLIOrange>
            <StyledLIOrange>
              <StyledSpan>Bei einer intensivpflegerischen 1:1-Versorgung beim Patienten zu Hause </StyledSpan>
            </StyledLIOrange>
            <StyledLIOrange>
              <StyledSpan>In unseren Intensiv-Wohngemeinschaften</StyledSpan>
            </StyledLIOrange>
            <StyledLIOrange>
              <StyledSpan>In unserer Tagespflege im Ahrberg-Viertel in Hannover-Linden</StyledSpan>
            </StyledLIOrange>
          </StyledUL>
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
