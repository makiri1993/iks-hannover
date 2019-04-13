import { Link } from 'gatsby'
import React, { Component } from 'react'
import Text from './text/Text'
const handIcon: string = require('../../static/img/icons/IKS_icons_hand.png')
const hausIcon: string = require('../../static/img/icons/IKS_icons_haus.png')
const augeIcon: string = require('../../static/img/icons/IKS_icons_auge.png')
interface Props {}

export default class FourColumns extends Component<Props> {
  render() {
    return (
      <div className='FlexDivContentCenter'>
        <div className='OneColumn'>
          <Link className='HomepageLink' to='/pflegedienst'>
            <img className='IconForButton' src={handIcon} />
          </Link>
          <h1 className='CenteredH1 CenteredH1Green CenteredH1GreenForColumn'>Pflegedienst</h1>
          <Text center>
            Mit unserem multinationalen Team leisten wir bereits seit 1996 einen Beitrag zur interkulturellen Pflege für Menschen mit verschiedensten kulturellen, sprachlichen oder
            religiösen Wurzeln. Unsere Patienten sowie ihre Wünsche, Bedürfnisse und Lebenssituationen stehen dabei für uns im Vordergrund und sind uns sehr wichtig.
            <Link className='HomepageLinkGreen' to='/pflegedienst'>
              ...
            </Link>
          </Text>
        </div>
        <div className='OneColumn'>
          <Link className='HomepageLink' to='/wohngemeinschaften'>
            <img className='IconForButton' src={hausIcon} />
          </Link>
          <h1 className='CenteredH1 CenteredH1Green CenteredH1GreenForColumn CenteredH1BlueForColumn'>Wohngemeinschaften</h1>
          <Text center>
            Für alle Senioren, die im Alter nicht in ein Altersheim ziehen möchten, stehen unsere Wohngemeinschaften in den Stadtteilen Roderbruch, List, Davenstedt, Stöcken und
            Burg als Alternative zur Verfügung.
            <Link className='HomepageLinkBlue' to='/wohngemeinschaften'>
              ...
            </Link>
          </Text>
        </div>
        <div className='OneColumn'>
          <Link className='HomepageLink' to='/intensivpflege'>
            <img className='IconForButton' src={augeIcon} />
          </Link>
          <h1 className='CenteredH1 CenteredH1Green CenteredH1GreenForColumn CenteredH1RedForColumn'>Außerklinische Pflege</h1>
          <Text center>
            Wir bieten zwei Versorgungsalternativen: Eine intensivpflegerische Versorgung zu Hause oder in einer unserer ambulant betreuten Intensiv-Wohngemeinschaften. Wir stimmen
            Therapie und ambulante Versorgung mit unseren kompetenten Teams und Ihrem ärztlichen Fachpersonal auf Ihre Wünsche und die Bedürfnisse Ihrer zu pflegenden Angehörigen
            ab.
            <Link className='HomepageLinkRed' to='/intensivpflege'>
              ...
            </Link>
          </Text>
        </div>
      </div>
    )
  }
}
