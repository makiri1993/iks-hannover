import * as React from 'react'
import Link from 'gatsby-link'

import Page from '../components/Page'
import { H4Footer, CenteredH1Orange, FlexDivContentCenter, FlexDivCards } from '../components/StyledComponents'
import Card from '../components/Card'

// Path to images
const a1: string = require('../images/presse-archiv/a1.jpg')
const a2: string = require('../images/presse-archiv/a2.jpg')
const a3: string = require('../images/presse-archiv/a3.jpg')
const a4: string = require('../images/presse-archiv/a4.jpg')
const a5: string = require('../images/presse-archiv/a5.jpg')
const a6: string = require('../images/presse-archiv/a6.jpg')
const a7: string = require('../images/presse-archiv/a7.jpg')
const a8: string = require('../images/presse-archiv/a8.jpg')
const a9: string = require('../images/presse-archiv/a9.jpg')
const a10: string = require('../images/presse-archiv/a10.jpg')
const a11: string = require('../images/presse-archiv/a11.jpg')
const a12: string = require('../images/presse-archiv/a12.jpg')
const a13: string = require('../images/presse-archiv/a13.jpg')
const a14: string = require('../images/presse-archiv/a14.jpg')
const a15: string = require('../images/presse-archiv/a15.jpg')
const a16: string = require('../images/presse-archiv/a16.jpg')
const a17: string = require('../images/presse-archiv/a17.jpg')
const a18: string = require('../images/presse-archiv/a18.jpg')
const a19: string = require('../images/presse-archiv/a19.jpg')
const a20: string = require('../images/presse-archiv/a20.jpg')
const a21: string = require('../images/presse-archiv/a21.jpg')
const a22: string = require('../images/presse-archiv/a22.jpg')
const a23: string = require('../images/presse-archiv/a23.jpg')

// Link to files




export default () => (
  <Page>
    <CenteredH1Orange>PRESSE 2017</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2017" img={a1} name="NP | 30.09.2017 96 & Flüchtlinge" />
      <Card alt="Zeitungsartikel von 2017" img={a2} name="NP | 11.09.2017 Wirtschaft & Flüchtlinge" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2017" img={a3} name="NP | 03.06.2017 Gründungsklima" />
      <Card alt="Zeitungsartikel von 2017" img={a4} name="NP | 19.06.2017 Pflege & Leiharbeit" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2017" img={a5} name="Häusliche Pflege | 2017 Unternehmerinnenportrait I" />
      <Card alt="Zeitungsartikel von 2017" img={a6} name="Häusliche Pflege | 2017 Unternehmerinnenportrait II" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2017" img={a7} name="Care Konkret | 19.05.2017 Intensiv WG" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2016</CenteredH1Orange>
    <CenteredH1Orange>PRESSE 2015</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2017" img={a8} name="Hallo Wochenende | 24.01.2015 bunt statt braun" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2014</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2014" img={a9} name="2014 | Großer Preis des Mittelstandes" />
      <Card alt="Zeitungsartikel von 2014" img={a10} name="Tagesspiegel | 29.10.2014 Frauen & Männer" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2014" img={a11} name="Nobilis | 06.2016 16 Fragen" />
      <Card alt="Zeitungsartikel von 2014" img={a12} name="Niedersächsische Wirtschaft | 06.2014 Ramadan" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2013</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2013" img={a13} name="Regions Journal | 27.02.2013 IKS" />
      <Card alt="Zeitungsartikel von 2013" img={a14} name="FES | 01.2013 Frauen & Führung" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2012</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2012" img={a15} name="CDU | 13.11.2012 Pflege" />
      <Card alt="Zeitungsartikel von 2012" img={a16} name="Basar | 09.2012 IKS" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2011</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2011" img={a17} name="Niedersächsische Wirtschaft | 2011 IKS" />
      <Card alt="Zeitungsartikel von 2011" img={a18} name="Hannover-entdecken.de | 11.10.2011 GFA" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2011" img={a19} name="BAD | 05.11.2017 Wohngemeinschaften" />
      <Card alt="Zeitungsartikel von 2011" img={a20} name="Basar | 10.2011 kulturelle Vielfalt" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2010</CenteredH1Orange>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2010" img={a21} name="Medifox | Herbst 2010 Teil I" />
      <Card alt="Zeitungsartikel von 2010" img={a22} name="Medifox | Herbst 2010 Teil II" />
    </FlexDivCards>
    <FlexDivCards>
      <Card alt="Zeitungsartikel von 2010" img={a23} name="Vorwärts | 10.2010 Altenpflegerin" />
    </FlexDivCards>
  </Page>
)
