import { Link } from 'gatsby'
import React from 'react'

// tslint:disable-next-line: no-var-requires
const logo_1: string = require('../../static/img/logo_iks.png')
// tslint:disable-next-line: no-var-requires
const logo_2: string = require('../../static/img/logo_baum.png')

interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => (
  <div className='FooterDiv'>
    <footer className='StyledFooter'>
      <div className='StyledFooterDiv'>
        <h4 className='H4Footero'>Interkultureller Sozialdienst GmbH</h4>
        <p className='color-white'>
          <br />
          Plaza de Rosalia 1<br />
          30449 Hannover
          <br />
          <br />
          Tel. 0511 - 210 10 44
          <br />
          Fax 0511 - 210 10 66
          <br />
          <br />
          Mail:{' '}
          <a className='LinkEmailOut' title='Email Adresse des interkulturellen Pfelgedienst Hannover' href='mailto:iks-hannover@iks-hannover.de'>
            iks-hannover@iks-hannover.de
          </a>
          <br />
          <Link className='LinkEmailWhite' to='/impressum' title='Link zu der Seite impressum des Pflegedienstes'>
            Impressum
          </Link>
          <br />
          <Link className='LinkEmailWhite' to='/datenschutzerklaerung' title='Link zu der Datenschutzerklärung des Pflegedienstes'>
            Datenschutzerklärung
          </Link>
          <br />
          <br />
          <img alt='Logo des Interkultureller Sozialdienstes GmbH' className='StyledIMG' src={logo_1} />
        </p>
      </div>
      <div className='StyledFooterDiv'>
        <h4 className='H4Footero'>Außerklinische Intensiv- und Beatmungspflege</h4>
        <p className='color-white'>
          <br />
          Voßstraße 1<br />
          30161 Hannover
          <br />
          <br />
          Tel. 0511 - 866 43 43 4<br />
          Fax 0511 - 866 43 43 5<br />
          <br />
          <br />
          <img alt='Logo des Außerklinische Intensiv- und Beatmungspflege' className='StyledIMG' src={logo_2} />
        </p>
      </div>
    </footer>
  </div>
)
export default Footer
