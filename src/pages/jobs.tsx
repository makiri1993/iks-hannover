import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import {
  DivCenterCol, StyledFooterDiv, CenteredH1Orange, PflegedienstP, StyledBR, H4Orange, POrange, StyledUL, StyledLIOrange, StyledSpan,
  DivCenterRow
} from '../components/StyledComponents';
import ImgWithLink from '../components/ImgWithLink'

const p1: string = require('../images/partner/p1.jpg')
const p2: string = require('../images/partner/p2.jpg')
const p3: string = require('../images/partner/p3.jpg')

export default () => (
  <Page>
    <Helmet
      title={'Jobs, Kooperationen und Partner - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Die Seite unserer Stellenangebote und Informationen über den Bundesfreiwilligendienst, Kooperationen und Partner.'
        }
      ]}
    />
    <DivCenterCol>
      <StyledFooterDiv>
        <CenteredH1Orange>JOBS</CenteredH1Orange>
        <PflegedienstP>
          Wir suchen für unseren  Bereich der  Außerklinischen Intensivpflege examiniertes Pflegepersonal und freuen uns auf Ihre Bewerbung.
          <StyledBR />
          Es ist jederzeit sinnvoll, uns Ihre Bewerbungsunterlagen zukommen zu lassen, da wir im Rahmen der Betriebserweiterung regelmäßig Personal mit unterschiedlichen Qualifikationen einstellen.
          <StyledBR />
        </PflegedienstP>
        <H4Orange>WISSENSWERTES</H4Orange>
        <StyledBR />
        <POrange>Bundesfreiwilligendienst</POrange>
        <PflegedienstP>Unser Betrieb ist anerkannte Bundesfreiwilligendienststelle mit der Kapazität von zwei Plätzen.</PflegedienstP>
        <POrange>Krankenpflege</POrange>
        <PflegedienstP>Wir kooperieren mit den folgenden Krankenpflegeschulen:</PflegedienstP>
        <StyledUL>
          <StyledLIOrange><StyledSpan>Landeskrankenhaus Wunstorf</StyledSpan></StyledLIOrange>
          <StyledLIOrange><StyledSpan>Deutsche Angestellten-Akademie</StyledSpan></StyledLIOrange>
        </StyledUL>
        <PflegedienstP>Die Krankenpflegeschüler dieser Schulen absolvieren bei uns ihr 6-wöchiges Praktikum.</PflegedienstP>
        <POrange>Altenpflege</POrange>
        <PflegedienstP>Ebenso besteht eine Kooperation mit der Anna-Siemsen-Schule im Bereich der Altenpflegeausbildung. Auch hier können die Altenpflegeschüler ihr Praktikum in unserem Betrieb absolvieren.</PflegedienstP>
        <POrange>PDL-Ausbildung</POrange>
        <PflegedienstP>Mit der DAA (Deutsche Angestellten-Akademie) besteht eine Zusammenarbeit bei der Ausbildung von Fachkräften zur Pflegedienstleitung (PDL). Diese können ebenfalls bei uns ihre Praktika absolvieren.</PflegedienstP>
        <StyledBR />
        <CenteredH1Orange>PARTNER</CenteredH1Orange>
        <PflegedienstP>Unsere Kooperationspartner in Hannover und Umgebung sind unter anderem die Unternehmen „ZAK – Zuhause alles klar“, ein Unternehmen für haushaltsnahe Dienstleistungen, sowie ZAK – Pflege, ein Pflegedienst im südlichen Hannover, und das Yoga- und Pilatesstudio VitaList in Hannover-List.“</PflegedienstP>
        <DivCenterRow>
          <ImgWithLink
            link="https://zak-pflege-hannover.de/"
            title="ZAK Pflege Hannover"
            img={p1}
            alt="Logo von der ZAK Pflege hannover"
          />
          <ImgWithLink
            link="http://www.zuhause-alles-klar.de/"
            title="ZAK zu hause alles klar"
            img={p2}
            alt="Logo von der ZAK zu hause alles klar"
          />
          <ImgWithLink
            link="http://www.vita-list.de/"
            title="Vita List Hannover - Joga - Pilates- Balance"
            img={p3}
            alt="Logo von der Vita List Hannover"
          />
        </DivCenterRow>
      </StyledFooterDiv>
      <StyledFooterDiv>
        <CenteredH1Orange>AKTUELLE STELLENANGEBOTE</CenteredH1Orange>
      </StyledFooterDiv>
    </DivCenterCol>
  </Page>
)
