import { Link } from "gatsby";
import React from "react";

// const logo_1: string = require('../../static/img/icons/IKS_LOGO_weiss-300x104.png')
// const logo_2: string = require('../../static/img/icons/logo_baum.png')

interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => (
  <div className="FooterDiv">
    <footer className="StyledFooter">
      <div className="StyledFooterDiv">
        <h4 className="H4Footero">Interkultureller Sozialdienst</h4>
        <p className="PFooter">
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
          Mail:{" "}
          <a
            className="LinkEmailOut"
            title="Email Adresse des interkulturellen Pfelgedienst Hannover"
            href="mailto:iks-hannover@iks-hannover.de"
          >
            iks-hannover@iks-hannover.de
          </a>
          <br />
          <Link
            className="LinkEmail"
            to="/impressum"
            title="Link zu der Seite impressum des Pflegedienstes"
          >
            Impressum
          </Link>
          <br />
          <Link
            className="LinkEmail"
            to="/datenschutzerklaerung"
            title="Link zu der Datenschutzerklärung des Pflegedienstes"
          >
            Datenschutzerklärung
          </Link>
          <br />
          <br />
          {/* <img className='StyledIMG' src={logo_1} /> */}
        </p>
      </div>
      <div className="StyledFooterDiv">
        <h4 className="H4Footero">
          Außerklinische Intensiv- und Beatmungspflege
        </h4>
        <p className="PFooter">
          <br />
          Voßstraße 1<br />
          30161 Hannover
          <br />
          <br />
          Tel. 0511 - 866 43 43 4<br />
          Fax 0511 - 866 43 43 5<br />
          <br />
          <br />
          {/* <img className='StyledIMG' src={logo_2} /> */}
        </p>
      </div>
    </footer>
    <a
      className="LinkEmailOutWtMargin"
      title="link zu der immajung seite"
      href="https://www.immajung.com"
    >
      code by immajung
    </a>
  </div>
);
export default Footer;
