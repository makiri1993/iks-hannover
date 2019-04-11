import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'

import Layout from '../components/Layout'

const logo_1: string = require('../images/icons/Schriftzug_Wohngemeinschaft.png')
const logo_2: string = require('../images/icons/logo_baum.png')
const flylerLink: string = require('../images/intensivpflege/IKS-AIWG-Flyer_ku_web.pdf')

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
    <CenteredText>
      <CenteredH1Red>Außerklinische Intensivpflege</CenteredH1Red>
      <PflegedienstP>
        Wir bieten zwei Versorgungsalternativen: Eine<strong> intensivpflegerische Versorgung zu Hause</strong> oder in einer unserer
        ambulant betreuten <strong>Wohngemeinschaften</strong> für Menschen mit intensivpflegerischem Bedarf.
        <StyledBR />
        <StyledBR />
        <LinkRed target='_blank' title='link zu Flyer Intensivpflege' href={flylerLink}>
          Unseren Flyer finden Sie hier.
        </LinkRed>
        <StyledBR />
        <StyledBR />
        Jeder Mensch hat nicht nur die Möglichkeit, sondern auch den rechtlichen Anspruch auf eine adäquate Versorgung im Rahmen der
        häuslichen Krankenpflege. So kann der Wunsch vieler Betroffener, in den eigenen vier Wänden leben zu wollen, verwirklicht werden.
        Wir stimmen Therapie und ambulante Versorgung mit unseren kompetenten Teams und Ihrem ärztlichen Fachpersonal auf Ihre Wünsche und
        die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
        <StyledBR />
        <StyledBR />
        Wir können Ihnen helfen, den Wunsch, in den eigenen vier Wänden leben zu wollen, zu verwirklichen.
      </PflegedienstP>
      <StyledUL>
        <StyledLI>
          <StyledSpan>ein Leben in Ihrer vertrauten Umgebung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>eine Versorgung rund um die Uhr</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>einfühlsame und rücksichtsvolle Begleitung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Unterstützung im Alltag</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Vermeidung von Infektionen</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Vermeidung von Krankenhausaufenthalten</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>bedarfsgerechte Versorgung unter Berücksichtigung Ihrer individuellen Lebensgewohnheiten</StyledSpan>
        </StyledLI>
      </StyledUL>
      <CenteredH4Red>PFLEGERISCHE LEISTUNG</CenteredH4Red>
      <StyledBR />
      <StyledUL>
        <StyledLI>
          <StyledSpan>Überwachung der invasiven und nicht-invasiven Beatmung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Erhebung von Vitalwerten und Beatmungsparametern</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Sauerstofftherapie</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>EKG und CO² Überwachung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Beatmungspflege mit Trachealkanülenmanagement</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Ernährungstherapie mit PEG, PEJ Versorgung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Infusionstherapie mit Portversorgung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Wund- und Schmerzmanagement</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Fachliche Anleitung von Patienten und Angehörigen</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Individuelles Notfallmanagement</StyledSpan>
        </StyledLI>
      </StyledUL>
      <StyledBR />
      <PRed>
        „Ich kann mir keinen Zustand denken, der mir unerträglicher und schauerlicher wäre, als mit schmerzerfüllter Seele der Fähigkeit
        beraubt zu sein, ihr Ausdruck zu verleihen.“{' '}
      </PRed>
      <PItalicAndSmall>Michel de Montaigne (1533 - 1592), französischer Philosoph </PItalicAndSmall>
      <StyledBR />
      <CenteredH4Red>WEITERE LEISTUNG</CenteredH4Red>
      <StyledUL>
        <StyledLI>
          <StyledSpan>Pflegefachberatung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Entlassungsmanagement</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Vermittlung von Pflegehilfsmitteln und Medizintechnik</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>fachpflegerische und sozialkompetente Versorgung und Betreuung</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Beatmungspflege mit Trachealkanülenmanagement</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Entwicklung individueller Therapiekonzepte</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Kooperation mit weiteren Dienstleistern</StyledSpan>
        </StyledLI>
        <StyledLI>
          <StyledSpan>Fort- und Weiterbildung unseres Fachpersonals</StyledSpan>
        </StyledLI>
      </StyledUL>
      <StyledBR />
      <PflegedienstP>
        Für eine umfassende Beratung sowie zu allen Fragen rund um die Finanzierung stehen wir Ihnen gerne zur Verfügung.
      </PflegedienstP>
      <StyledBR />
      <StyledBR />
      <CenteredH4Red>Marion Hartmann | Leitung der Intensivpflege</CenteredH4Red>
      <LinkEmail title='Email Adresse' href='mailto:hartmann@iks-hannover.de'>
        hartmann@iks-hannover.de
      </LinkEmail>
      <CenteredH4Red>Marco Schillaci | Fachliche Leitung</CenteredH4Red>
      <LinkEmail title='Email Adresse' href='mailto:schillaci@iks-hannover.de'>
        schillaci@iks-hannover.de
      </LinkEmail>
    </CenteredText>
    <StyledBR />
    <DivCenter>
      <StyledIMG alt='Logo der Wohngemeinschaft List' title='Wohngemeinschaft List' src={logo_1} />
      <StyledIMG alt='Logo der Wohngemeinschaft List' title='Wohngemeinschaft List' src={logo_2} />
    </DivCenter>
    <StyledBR />
  </Layout>
)

export const PRed = styled.p`
  font-style: italic;
  color: ${colors.red};
`

export const PItalicAndSmall = styled.p`
  font-size: 12px;
`

export const StyledUL = styled.ul``

export const StyledLI = styled.li`
  color: ${colors.red};
`

export const LinkRed = styled.a`
  color: ${colors.red};
`

export const StyledSpan = styled.span`
  color: ${colors.black};
  font-size: 16px;
`

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`

export const CenteredH4Red = styled.h4`
  color: ${colors.red};
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const StyledIMG = styled.img`
  width: auto;
  height: 100px;
`

export const DivCenter = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
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
  margin-top: 35px;
  margin-bottom: 35px;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    font-weight: 300;
  }
`

export const CenteredH1Red = styled(CenteredH1)`
  color: ${colors.red};
`

export const StyledBR = styled.br``

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

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
`
