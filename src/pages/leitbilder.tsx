import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { colors, dimensions } from '../styles/variables'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Page>
      <Helmet
        title={'Leitbilder - Interkultureller Pflegedienst Hannover'}
        meta={[
          {
            name: 'description',
            content:
              'Seit 1996 verfolgen wir als regionales Unternehmen in Hannover das Ziel die Lebensqualität der Bürger zu verbessern. Durch unsere Vielfalt an Sprachen und Kulturen können wir Ihnen in jeder Lage helfen.',
          },
        ]}
      />
      <Container>
        <BigTextInOrange>LEITBILDER</BigTextInOrange>
        <CenteredPLeftWithMarginInOrange>
          Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, bieten sich unsere Wohngemeinschaften in den Stadtteilen
          Roderbruch, List, Davenstedt, Stöcken und Burg als Alternative an.
        </CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Unsere Kunden sowie ihre Wünsche, Bedürfnisse und Lebenssituationen stehen dabei für uns im Vordergrund und sind uns sehr wichtig.
          Mit unserem multinationalen Team leisten wir also bereits seit 1996 einen Beitrag zur interkulturellen Pflege für Menschen mit
          verschiedensten kulturellen, sprachlichen oder religiösen Wurzeln.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Ein besonderes Augenmerk legen wir auf die Qualität der Leistungen, die unsere Mitarbeiter erbringen und sind dabei stets bemüht,
          diese zu verbessern und an die Bedürfnisse unserer Kunden anzupassen. Ein Netzwerk aus unterschiedlichen Anbietern des
          Gesundheitswesens wie z.B. Ärzte, Sanitätshäuser, Apotheken, Menüdienste etc. ermöglicht es uns, unseren Kunden auch Leistungen zu
          vermitteln, die wir selbst nicht anbieten können.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Da uns unsere Kunden sehr am Herzen liegen, engagieren wir uns zudem in verschiedenen Arbeitskreisen, Vereinen und
          Interessengemeinschaften, die sich ebenfalls mit dem Thema häusliche Pflege beschäftigen.
        </CenteredPLeftWithMargin>
        <br />

        <H4Orange>UNTERNEHMENSLEITBILD</H4Orange>
        <CenteredPLeftWithMarginInOrange>Der Betrieb</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Unser Betrieb ist die Summe unseres Handelns, unserer Wünsche und unserer Vorstellung von Pflege und Arbeit.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Wir sind bestrebt, eine Transparenz für den Betrieb zu schaffen, die sowohl nach innen wie auch nach außen sichtbar ist.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Unser Team</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMarginInOrange>
          <i>wir sind professionell, weil</i>
        </CenteredPLeftWithMarginInOrange>
        <StyledLiWithOrangeBullet>wir verschiedene Qualifikationen besitzen</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir vielfältig sind in Sprachen und Nationalitäten</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir ein Team von gleichwertigen Menschen sind</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir uns denselben Zielen verpflichtet haben</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir auch anerkennen, dass wir eigene Grenzen haben</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir unsere Grenzen akzeptieren</StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>
          wir diese Grenzen als Chance nutzen, im Austausch unser eigenes Handeln zu überprüfen und zu ändern
        </StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>wir damit niemals dort verharren, wo wir gerade stehen.</StyledLiWithOrangeBullet>
        <CenteredPLeftWithMarginInOrange>Unsere Verpflichtung</CenteredPLeftWithMarginInOrange>

        <CenteredPLeftWithMargin>
          Unser Handeln definiert sich als „interkulturell“. Für uns ist das „Andere“ dabei nicht das „Fremde“, sondern das „Besondere“. Die
          Kultur ist die Summe der Werte und Traditionen der Gesellschaften. Wir verpflichten uns, die Werte und Traditionen unserer
          Klienten zu respektieren, auch wenn es nicht die unseren sind. Wir begründen unser Handeln auf der Basis dieser Motive:
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Neue Arbeits- und Organisationsformen zu entwickeln, um unsere Ideal-Vorstellungen von „Arbeit“ zu verwirklichen.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Durch unser tägliches Handeln die Gesellschaft zu sensibilisieren für die Bereiche „Alter“, „Pflege“ und „Migration“. Damit
          möchten wir einen aktiven Beitrag gegen Ausgrenzung und Rassismus leisten.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMargin>
          Wir verpflichten uns dem Prinzip des respektierenden Umgangs miteinander, in einem Gewalt-, Sexismus-, Rassismus-, und
          Vorurteilsfreien Raum.
        </CenteredPLeftWithMargin>
        <br />

        <H4Orange>PFLEGELEITBILD</H4Orange>
        <CenteredPLeftWithMarginInOrange>Der Mensch</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Die Würde jedes Menschen ist unantastbar. Wir verpflichten uns, den Menschen zu achten, zu pflegen und zu versorgen - ungeachtet
          seiner Hautfarbe, Herkunft, Religion, Sprache und Kultur. Diese Prämisse gilt nicht nur für die von uns betreuten Patienten, deren
          Angehörige und alle Mitarbeiter, sondern für alle Menschen.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Das Handeln</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Die Würde jedes Menschen ist unantastbar. Wir verpflichten uns, den Menschen zu achten, zu pflegen und zu versorgen - ungeachtet
          seiner Hautfarbe, Herkunft, Religion, Sprache und Kultur. Diese Prämisse gilt nicht nur für die von uns betreuten Patienten, deren
          Angehörige und alle Mitarbeiter, sondern für alle Menschen.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Der Mensch</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Wir verpflichten uns des ganzheitlichen Handelns nach dem biographischen Ansatz. Wir möchten dort anknüpfen, wo der Mensch meint,
          zu stehen. Wir akzeptieren und respektieren dadurch verschiedene vorhandene Realitäten, die nicht unserer Realität entsprechen
          müssen. Die Realität des Patienten ist die Grundlage unserer Realität im Pflegeprozess. Pflegeprozess ist immer auch
          „Pflege-im-Prozess“ und damit „Pflege in Beziehung“.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Die Kultur</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Unsere Interaktion definiert sich als „interkulturell“. Wir sind nicht „Mittler“ zwischen den Kulturen, sondern „Zeugen“ der
          Kulturen. Wir werden bestehende und funktionierende Strukturen weder ändern noch zerstören, damit das „Andere“ auch anders bleiben
          kann. Wir als Pflegende verpflichten uns, die Werte und Traditionen unserer Klienten in den Pflegeprozess einzubeziehen und zu
          respektieren, auch wenn es nicht die unseren sind.
        </CenteredPLeftWithMargin>
        <br />
        <H4Orange>DIE MOTIVE</H4Orange>

        <StyledLiWithOrangeBullet>
          Bestehende Defizite in der Versorgung Pflegebedürftiger insbesondere Nicht-Deutscher Patienten zu beheben.
        </StyledLiWithOrangeBullet>
        <StyledLiWithOrangeBullet>
          Eine Konzeption von Pflege zu entwickeln, die mehr sein kann als „warm, satt, sauber“, und die psycho-sozialen Aspekte sowie die
          religiös-kulturellen Gegebenheiten der Patienten mit einschließt.
        </StyledLiWithOrangeBullet>
        <br />

        <H4Orange>FÜHRUNGSLEITBILD</H4Orange>
        <CenteredPLeftWithMarginInOrange>Nachhaltigkeit</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Oberstes Ziel der Unternehmensführung ist, eine stetige Verbesserung unserer Dienstleistung zu erreichen, um konkurrenzfähig zu
          bleiben und Arbeitsplätze erhalten sowie neue schaffen zu können.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Motivierung</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Die Haltung der Führungskräfte dieses Unternehmens ist eine wertschätzende und vor allem motivierende Haltung, die die Fähigkeiten
          der Mitarbeiter wahrnimmt, ihre Stärken fördert und sie entsprechend ihrer besonderen Fähigkeiten einsetzt.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Förderung</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Um eine stetige Förderung der Mitarbeiter zu gewährleisten, setzen die Führungskräfte des Unternehmens wirkungsvolle Programme zur
          Schulung und Fortbildung der Mitarbeiter fest.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Furchtfreies Arbeitsklima</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Alle in diesem Unternehmen arbeitenden Menschen sind verpflichtet, einen respektierlichen und wertschätzenden Umgang miteinander
          zu pflegen. Die leitenden Mitarbeiter des Unternehmens sind verpflichtet, ein Arbeitsklima zu schaffen, das von gegenseitigem
          Vertrauen geprägt und frei von Angst und Repression ist.
        </CenteredPLeftWithMargin>
        <CenteredPLeftWithMarginInOrange>Kreativität</CenteredPLeftWithMarginInOrange>
        <CenteredPLeftWithMargin>
          Die Unternehmensführung ist bestrebt, das eigene Handeln und die eigene Denkweise stets auf Richtigkeit zu überprüfen und ggf. zu
          neuem Handeln und neuen Denkweisen zu gelangen. Dies ist elementarer Teil der Verantwortung, die der Unternehmensführung zukommt.
        </CenteredPLeftWithMargin>
      </Container>
    </Page>
  </Layout>
)

export const BigTextInOrange = styled.div`
  font-size: ${dimensions.headingSizes.siteHeader}rem;
  text-align: center;
  margin: 1.5rem;
  color: ${colors.orange};
`

export const CenteredP = styled.p`
  text-align: center;
`

export const CenteredPLeft = styled.p`
  text-align: left;
`
export const CenteredPLeftWithMargin = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
`

export const CenteredPLeftWithMarginInOrange = styled(CenteredPLeftWithMargin)`
  color: ${colors.orange};
`

export const CenteredPWithWidth = styled(CenteredP)`
  width: 250px;
`

export const StyledUL = styled.ul``

export const StyledUlWithoutBullets = styled.ul`
  list-style-type: none;
`

export const StyledLiWithOrangeBullet = styled.li`
  list-style-type: none;
  margin: 16px;
  color: ${colors.black};
  &:before {
    content: '•';
    color: ${colors.orange};
    padding-right: 1rem;
  }
`

export const H4Orange = styled.h4`
  color: ${colors.orange};
`
