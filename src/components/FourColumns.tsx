import * as React from 'react'
import {
  FlexDivContentCenter,
  OneColumn,
  IconForButton,
  HomepageLink,
  CenteredPLeft,
  CenteredH1GreenForColumn,
  CenteredH1BlueForColumn,
  CenteredH1RedForColumn,
  HomepageLinkBlue,
  HomepageLinkGreen,
  HomepageLinkRed
} from './StyledComponents'
const handIcon: string = require('../images/icons/IKS_icons_hand.png')
const hausIcon: string = require('../images/icons/IKS_icons_haus.png')
const augeIcon: string = require('../images/icons/IKS_icons_auge.png')
interface Props {}

export default class FourColumns extends React.Component<Props> {
  render() {
    return (
      <FlexDivContentCenter>
        <OneColumn>
          <HomepageLink to="/" href="/">
            <IconForButton src={handIcon} />
          </HomepageLink>
          <CenteredH1GreenForColumn>Pflegedienst</CenteredH1GreenForColumn>
          <CenteredPLeft>
            Seit 1995 gibt es sie nun schon: die gesetzliche Pflegeversicherung, verankert im elften Sozialgesetzbuch (SGB XI). Sie ist die
            vierte Säule des Gesundheitssystems und finanziert - wenn auch nur zum Teil - diejenigen Kosten, die entstehen, wenn Versicherte
            pflegebedürftig werden.
            <HomepageLinkGreen to="/" href="/">
              ...
            </HomepageLinkGreen>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to="/" href="/">
            <IconForButton src={hausIcon} />
          </HomepageLink>
          <CenteredH1BlueForColumn>Wohngemeinschaft</CenteredH1BlueForColumn>
          <CenteredPLeft>
            Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, stehen unsere Wohngemeinschaften in den Stadtteilen
            Roderbruch, List, Davenstedt, Stöcken und Burg als Alternative zur Verfügung.
            <HomepageLinkBlue to="/" href="/">
              ...
            </HomepageLinkBlue>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to="/" href="/">
            <IconForButton src={augeIcon} />
          </HomepageLink>
          <CenteredH1RedForColumn>Außerklinische Pflege</CenteredH1RedForColumn>
          <CenteredPLeft>
            Jeder Mensch hat nicht nur die Möglichkeit, sondern auch den rechtlichen Anspruch auf eine adäquate Versorgung im Rahmen der
            häuslichen Krankenpflege. So kann der Wunsch vieler Betroffener, in den eigenen vier Wänden leben zu wollen, verwirklicht
            werden. Wir stimmen Therapie und ambulante Versorgung in kleinen, spezialisierten Teams und gemeinsam mit Ihren Ärzten auf Ihre
            individuellen Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
            <HomepageLinkRed to="/" href="/">
              ...
            </HomepageLinkRed>
          </CenteredPLeft>
        </OneColumn>
      </FlexDivContentCenter>
    )
  }
}
