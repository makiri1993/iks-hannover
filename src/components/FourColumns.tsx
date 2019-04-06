import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'
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
          <HomepageLink to='/pflegedienst'>
            <IconForButton src={handIcon} />
          </HomepageLink>
          <CenteredH1GreenForColumn>Pflegedienst</CenteredH1GreenForColumn>
          <CenteredPLeft>
            Mit unserem multinationalen Team leisten wir bereits seit 1996 einen Beitrag zur interkulturellen Pflege für Menschen mit
            verschiedensten kulturellen, sprachlichen oder religiösen Wurzeln. Unsere Patienten sowie ihre Wünsche, Bedürfnisse und
            Lebenssituationen stehen dabei für uns im Vordergrund und sind uns sehr wichtig.
            <HomepageLinkGreen to='/pflegedienst'>...</HomepageLinkGreen>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to='/wohngemeinschaften'>
            <IconForButton src={hausIcon} />
          </HomepageLink>
          <CenteredH1BlueForColumn>Wohngemeinschaften</CenteredH1BlueForColumn>
          <CenteredPLeft>
            Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, stehen unsere Wohngemeinschaften in den Stadtteilen
            Roderbruch, List, Davenstedt, Stöcken und Burg als Alternative zur Verfügung.
            <HomepageLinkBlue to='/wohngemeinschaften'>...</HomepageLinkBlue>
          </CenteredPLeft>
        </OneColumn>
        <OneColumn>
          <HomepageLink to='/intensivpflege'>
            <IconForButton src={augeIcon} />
          </HomepageLink>
          <CenteredH1RedForColumn>Außerklinische Pflege</CenteredH1RedForColumn>
          <CenteredPLeft>
            Wir bieten zwei Versorgungsalternativen: Eine intensivpflegerische Versorgung zu Hause oder in einer unserer ambulant betreuten
            Intensiv-Wohngemeinschaften. Wir stimmen Therapie und ambulante Versorgung mit unseren kompetenten Teams und Ihrem ärztlichen
            Fachpersonal auf Ihre Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen ab.
            <HomepageLinkRed to='/intensivpflege'>...</HomepageLinkRed>
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

export const CenteredH1Green = styled(CenteredH1)`
  color: ${colors.green};
`

export const CenteredH1GreenForColumn = styled(CenteredH1Green)`
  font-weight: 250;
  margin: 0;
`
export const CenteredH1BlueForColumn = styled(CenteredH1GreenForColumn)`
  color: ${colors.blue};
`
export const CenteredH1RedForColumn = styled(CenteredH1GreenForColumn)`
  color: ${colors.red};
`

export const HomepageLinkBlue = styled(HomepageLink)`
  /* position: absolute; */
  color: ${colors.blue};
  margin-left: 3px;
`
