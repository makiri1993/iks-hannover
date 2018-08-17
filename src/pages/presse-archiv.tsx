import * as React from 'react'
import Helmet from 'react-helmet'
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
const a24: string = require('../images/presse-archiv/a24.jpg')
const a25: string = require('../images/presse-archiv/a25.jpg')
const a26: string = require('../images/presse-archiv/a26.jpg')
const a27: string = require('../images/presse-archiv/a27.jpg')

// Link to files
const link1: string = require('../images/presse-archiv/Artikel/01_Presse_2017_3009_NP_Schwimmen.jpg')
const link2: string = require('../images/presse-archiv/Artikel/02_Presse_2017_1109_NP_WirtschaftFluechtlinge.jpg')
const link3: string = require('../images/presse-archiv/Artikel/03_Presse_2017_0306_NP_Gruendungsklima.jpg')
const link4: string = require('../images/presse-archiv/Artikel/04_Presse_2017_1906_NP_PflegeLeiharbeit-1.jpg')
const link5: string = require('../images/presse-archiv/Artikel/05_Presse_haeuslichePflege_Unternehmerinnenportrait.jpg')
const link6: string = require('../images/presse-archiv/Artikel/06_Presse_haeuslichePflege_Unternehmerinnenportrait_2.jpg')
const link7: string = require('../images/presse-archiv/Artikel/07_Presse_2017_1905_CareKonkret_IntensivWG.jpg')
const link8: string = require('../images/presse-archiv/Artikel/08_Presse_2015_2401_HalloWochenende_buntstattbraun.jpg')
const link9: string = require('../images/presse-archiv/Artikel/09_Presse_2014_GrosserPreisdesMittelstandes.jpg')
const link10: string = require('../images/presse-archiv/Artikel/10_Presse_2014_2910_Tagesspiegel_FrauenMaenner.jpg')
const link11: string = require('../images/presse-archiv/Artikel/11_Presse_2014_06_Nobilis_16Fragen.jpg')
const link12: string = require('../images/presse-archiv/Artikel/12_Presse_2014_06_niedersaesischeWirtschaft_Ramadan.jpg')
const link13: string = require('../images/presse-archiv/Artikel/13_Presse_2013_2702_RegionsJournal_IKS.jpg')
const link14: string = require('../images/presse-archiv/Artikel/14_Presse_2013_01_FES_FrauenFuehrung.jpg')
const link15: string = require('../images/presse-archiv/Artikel/15_Presse_2012_1311_CDU_Pflege.jpg')
const link16: string = require('../images/presse-archiv/Artikel/16_Presse_2012_09_Basar_IKS.jpg')
const link17: string = require('../images/presse-archiv/Artikel/17_Presse_2011_niedersaesischeWirtschaft_IKS.jpg')
const link18: string = require('../images/presse-archiv/Artikel/18_Presse_2011_1110_hannover-entdecken.de_GFA.jpg')
const link19: string = require('../images/presse-archiv/Artikel/19_Presse_2011_0511_BAD_Wohngemeinschaften.jpg')
const link20: string = require('../images/presse-archiv/Artikel/20_Presse_2011_10_Basar_kulturelleVielfalt.jpg')
const link21: string = require('../images/presse-archiv/Artikel/21_Presse_2010_Herbst_Medifox.jpg')
const link22: string = require('../images/presse-archiv/Artikel/22_Presse_2010_Herbst_Medifox_2.jpg')
const link23: string = require('../images/presse-archiv/Artikel/23_Presse_2010_10_Vorwaerts_Altenpflegerin.jpg')
const link24: string = require('../images/presse-archiv/Artikel/24_Presse_2008_Stadt_Hannover_Preis_.jpg')
const link25: string = require('../images/presse-archiv/Artikel/25_Presse_2006_11_HAZ_WG.jpg')
const link26: string = require('../images/presse-archiv/Artikel/26_Presse_1998_Pflege_Aktuell-1.jpg')
const link27: string = require('../images/presse-archiv/Artikel/27_Presse_1998_Pflege_Aktuell_2.jpg')

export default () => (
  <Page>
    <Helmet
      title={'Presse - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content: 'Schauen Sie sich alle unsere Erwähnungen in der Presse an. Hier finden Sie alle Artikel von 1998 bis heute aus z.B Zeitungen in Hannover.'
        }
      ]}
    />
    <CenteredH1Orange>PRESSE 2017</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link1} alt="Zeitungsartikel von 2017" img={a1} name="NP | 30.09.2017 96 & Flüchtlinge" />
      <Card link={link2} alt="Zeitungsartikel von 2017" img={a2} name="NP | 11.09.2017 Wirtschaft & Flüchtlinge" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link3} alt="Zeitungsartikel von 2017" img={a3} name="NP | 03.06.2017 Gründungsklima" />
      <Card link={link4} link={link1} alt="Zeitungsartikel von 2017" img={a4} name="NP | 19.06.2017 Pflege & Leiharbeit" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link5} alt="Zeitungsartikel von 2017" img={a5} name="Häusliche Pflege | 2017 Unternehmerinnenportrait I" />
      <Card link={link6} alt="Zeitungsartikel von 2017" img={a6} name="Häusliche Pflege | 2017 Unternehmerinnenportrait II" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link7} alt="Zeitungsartikel von 2017" img={a7} name="Care Konkret | 19.05.2017 Intensiv WG" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2016</CenteredH1Orange>
    <CenteredH1Orange>PRESSE 2015</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link8} alt="Zeitungsartikel von 2017" img={a8} name="Hallo Wochenende | 24.01.2015 bunt statt braun" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2014</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link9} alt="Zeitungsartikel von 2014" img={a9} name="2014 | Großer Preis des Mittelstandes" />
      <Card link={link10} alt="Zeitungsartikel von 2014" img={a10} name="Tagesspiegel | 29.10.2014 Frauen & Männer" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link11} alt="Zeitungsartikel von 2014" img={a11} name="Nobilis | 06.2016 16 Fragen" />
      <Card link={link12} alt="Zeitungsartikel von 2014" img={a12} name="Niedersächsische Wirtschaft | 06.2014 Ramadan" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2013</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link13} alt="Zeitungsartikel von 2013" img={a13} name="Regions Journal | 27.02.2013 IKS" />
      <Card link={link14} alt="Zeitungsartikel von 2013" img={a14} name="FES | 01.2013 Frauen & Führung" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2012</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link15} alt="Zeitungsartikel von 2012" img={a15} name="CDU | 13.11.2012 Pflege" />
      <Card link={link16} alt="Zeitungsartikel von 2012" img={a16} name="Basar | 09.2012 IKS" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2011</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link17} alt="Zeitungsartikel von 2011" img={a17} name="Niedersächsische Wirtschaft | 2011 IKS" />
      <Card link={link18} alt="Zeitungsartikel von 2011" img={a18} name="Hannover-entdecken.de | 11.10.2011 GFA" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link19} alt="Zeitungsartikel von 2011" img={a19} name="BAD | 05.11.2017 Wohngemeinschaften" />
      <Card link={link20} alt="Zeitungsartikel von 2011" img={a20} name="Basar | 10.2011 kulturelle Vielfalt" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2010</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link21} alt="Zeitungsartikel von 2010" img={a21} name="Medifox | Herbst 2010 Teil I" />
      <Card link={link22} alt="Zeitungsartikel von 2010" img={a22} name="Medifox | Herbst 2010 Teil II" />
    </FlexDivCards>
    <FlexDivCards>
      <Card link={link23} alt="Zeitungsartikel von 2010" img={a23} name="Vorwärts | 10.2010 Altenpflegerin" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2008</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link24} alt="Zeitungsartikel von 2008" img={a24} name="2008 | Stadt Hannover Preis" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 2006</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link25} alt="Zeitungsartikel von 2006" img={a25} name="HAZ | 11.2006 WG" />
    </FlexDivCards>
    <CenteredH1Orange>PRESSE 1998</CenteredH1Orange>
    <FlexDivCards>
      <Card link={link26} alt="Zeitungsartikel von 1998" img={a26} name="Pflege Aktuell | 1998 Teil I" />
      <Card link={link27} alt="Zeitungsartikel von 1998" img={a27} name="Pflege Aktuell | 1998 Teil II" />
    </FlexDivCards>
  </Page>
)
