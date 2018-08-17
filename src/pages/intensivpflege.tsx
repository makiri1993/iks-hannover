import * as React from 'react'
import Link from 'gatsby-link'

import Page from '../components/Page'
import { CenteredText, CenteredH1Red, PflegedienstP, StyledBR, LinkRed, CenteredH4Red, StyledIMG, FlexDivContentCenter, StyledFooterDiv, StyledUL, StyledLI, StyledSpan, PRed, PItalicAndSmall, LinkEmail, DivCenter } from '../components/StyledComponents';

const logo_1: string = require('../images/icons/Schriftzug_Wohngemeinschaft.png')
const logo_2: string = require('../images/icons/logo_baum.png')
const flylerLink: string = require('../images/intensivpflege/IKS-AIWG-Flyer_ku_web.pdf')

export default () => (
  <Page>
    <CenteredText>
      <DivCenter>
        <StyledIMG src={logo_1} />
        <StyledIMG src={logo_2} />
      </DivCenter>
      <CenteredH1Red>AUßERKLINISCHE INTENSIVPFLEGE</CenteredH1Red>
      <PflegedienstP>
        Wir stimmen Therapie und ambulante Versorgung mit unseren kompetenten Teams und Ihren Ärzten auf Ihre Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
        <StyledBR />
        <StyledBR />
        Wir bieten zwei Versorgungsalternativen: Eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.
        <StyledBR />
        <StyledBR />
        <LinkRed target="_blank" title="link zu Flyer Intensivpflege" href={flylerLink}>Unseren Flyer finden Sie hier.</LinkRed>
        <StyledBR />
        <StyledBR />
      </PflegedienstP>
      <CenteredH4Red>PFLEGERISCHE LEISTUNG</CenteredH4Red>
      <StyledBR />
      <StyledUL>
        <StyledLI><StyledSpan>Überwachung der invasiven und nicht-invasiven Beatmung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Erhebung von Vitalwerten und Beatmungsparametern</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Sauerstofftherapie</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>EKG und CO² Überwachung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Beatmungspflege mit Trachealkanülenmanagement</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Ernährungstherapie mit PEG, PEJ Versorgung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Infusionstherapie mit Portversorgung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Wund- und Schmerzmanagement</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Fachliche Anleitung von Patienten und Angehörigen</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Individuelles Notfallmanagement</StyledSpan></StyledLI>
      </StyledUL>
      <StyledBR />
      <PRed>„Ich kann mir keinen Zustand denken, der mir unerträglicher und schauerlicher wäre, als mit schmerzerfüllter Seele der Fähigkeit beraubt zu sein, ihr Ausdruck zu verleihen.“ </PRed>
      <PItalicAndSmall>Michel de Montaigne (1533 - 1592), französischer Philosoph </PItalicAndSmall>
      <StyledBR />
      <CenteredH4Red>WEITERE LEISTUNG</CenteredH4Red>
      <StyledUL>
        <StyledLI><StyledSpan>Pflegefachberatung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Entlassungsmanagement</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Vermittlung von Pflegehilfsmitteln und Medizintechnik</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>fachpflegerische und sozialkompetente Versorgung und Betreuung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Beatmungspflege mit Trachealkanülenmanagement</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Entwicklung individueller Therapiekonzepte</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Kooperation mit weiteren Dienstleistern</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Fort- und Weiterbildung unseres Fachpersonals</StyledSpan></StyledLI>
      </StyledUL>
      <StyledBR />
      <PRed>Jeder Mensch hat nicht nur die Möglichkeit, sondern auch den rechtlichen Anspruch auf eine adäquate Versorgung im Rahmen der häuslichen Krankenpflege. So kann der Wunsch vieler Betroffener, in den eigenen vier Wänden leben zu wollen, verwirklicht werden. Wir stimmen Therapie und ambulante Versorgung in kleinen, spezialisierten Teams und gemeinsam mit Ihren Ärzten auf Ihre individuellen Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.</PRed>
      <PflegedienstP>Wir können Ihnen helfen, den Wunsch, in den eigenen vier Wänden leben zu wollen, zu verwirklichen.</PflegedienstP>
      <StyledUL>
        <StyledLI><StyledSpan>ein Leben in Ihrer vertrauten Umgebung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>eine Versorgung rund um die Uhr</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>einfühlsame und rücksichtsvolle Begleitung</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Unterstützung im Alltag</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Vermeidung von Infektionen</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>Vermeidung von Krankenhausaufenthalten</StyledSpan></StyledLI>
        <StyledLI><StyledSpan>bedarfsgerechte Versorgung unter Berücksichtigung Ihrer individuellen Lebensgewohnheiten</StyledSpan></StyledLI>
      </StyledUL>
      <PflegedienstP>Für eine umfassende Beratung sowie zu allen Fragen rund um die Finanzierung stehen wir Ihnen gerne zur Verfügung.</PflegedienstP>
      <StyledBR />
      <StyledBR />
      <CenteredH4Red>Marion Hartmann | Leitung der Intensivpflege</CenteredH4Red>
      <LinkEmail href="mailto:hartmann@iks-hannover.de">hartmann@iks-hannover.de</LinkEmail>
      <CenteredH4Red>Agnieszka Spouncer | Fachliche Leitung</CenteredH4Red>
      <LinkEmail href="mailto:spouncer@iks-hannover.de">spouncer@iks-hannover.de</LinkEmail>
    </CenteredText>
    <StyledBR />
    <StyledBR />
  </Page>
)
