import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import Link from 'gatsby-link'
import { onEvent } from '../styles/mixins'

const handIcon: string = require('../images/icons/IKS_icons_hand.png')
const hausIcon: string = require('../images/icons/IKS_icons_haus.png')
const augeIcon: string = require('../images/icons/IKS_icons_auge.png')
interface Props {}

export default class FourColumns extends React.Component<Props> {
  render() {
    return (
      <FlexDivContentCenter>
        <OneColumn>
          <HomepageLink to="/pflegedienst" href="/">
            <IconForButton src={handIcon} />
          </HomepageLink>
          <CenteredH1GreenForColumn>Pflegedienst</CenteredH1GreenForColumn>
          <CenteredPLeft>
            Seit 1995 gibt es sie nun schon: die gesetzliche Pflegeversicherung, verankert im elften Sozialgesetzbuch (SGB XI). Sie ist die
            vierte Säule des Gesundheitssystems und finanziert - wenn auch nur zum Teil - diejenigen Kosten, die entstehen, wenn Versicherte
            pflegebedürftig werden.
            <HomepageLinkGreen to="/pflegedienst" href="/">
              ...
            </HomepageLinkGreen>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to="/wohngemeinschaften" href="/">
            <IconForButton src={hausIcon} />
          </HomepageLink>
          <CenteredH1BlueForColumn>Wohngemeinschaft</CenteredH1BlueForColumn>
          <CenteredPLeft>
            Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, stehen unsere Wohngemeinschaften in den Stadtteilen
            Roderbruch, List, Davenstedt, Stöcken und Burg als Alternative zur Verfügung.
            <HomepageLinkBlue to="/wohngemeinschaften" href="/">
              ...
            </HomepageLinkBlue>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to="/intensivpflege" href="/">
            <IconForButton src={augeIcon} />
          </HomepageLink>
          <CenteredH1RedForColumn>Außerklinische Pflege</CenteredH1RedForColumn>
          <CenteredPLeft>
            Jeder Mensch hat nicht nur die Möglichkeit, sondern auch den rechtlichen Anspruch auf eine adäquate Versorgung im Rahmen der
            häuslichen Krankenpflege. So kann der Wunsch vieler Betroffener, in den eigenen vier Wänden leben zu wollen, verwirklicht
            werden. Wir stimmen Therapie und ambulante Versorgung in kleinen, spezialisierten Teams und gemeinsam mit Ihren Ärzten auf Ihre
            individuellen Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
            <HomepageLinkRed to="/intensivpflege" href="/">
              ...
            </HomepageLinkRed>
          </CenteredPLeft>
        </OneColumn>
      </FlexDivContentCenter>
    )
  }
}

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 799px) {
    flex-direction: column;
  }
`
export const OneColumn = styled.div`
  width: 24vw;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 799px) {
    flex-direction: column;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const CenteredPLeft = styled.p`
  text-align: left;
`

export const HomepageLink = styled(Link)`
  /* position: absolute; */
  color: ${colors.white};
  top: 35%;
  /* left: 50; */
  text-align: center;
  font-weight: 600;
  ${onEvent`
    text-decoration: none;
  `};
`
export const HomepageLinkGreen = styled(HomepageLink)`
  /* position: absolute; */
  color: ${colors.green};
  margin-left: 3px;
`

export const HomepageLinkRed = styled(HomepageLink)`
  /* position: absolute; */
  color: ${colors.red};
  margin-left: 3px;
`

export const IconForButton = styled.img`
  width: 120px;
  height: 120px;
`
export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  padding: 2.4rem;
  margin: 1em;
`

export const CenteredH1Green = CenteredH1.extend`
  color: ${colors.green};
`

export const CenteredH1GreenForColumn = CenteredH1Green.extend`
  font-weight: 250;
  margin: 0;
`
export const CenteredH1BlueForColumn = CenteredH1GreenForColumn.extend`
  color: ${colors.blue};
`
export const CenteredH1RedForColumn = CenteredH1GreenForColumn.extend`
  color: ${colors.red};
`

export const HomepageLinkBlue = styled(HomepageLink)`
  /* position: absolute; */
  color: ${colors.blue};
  margin-left: 3px;
`
