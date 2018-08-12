import * as React from 'react'
import { StyledFooter, H4Footer, PFooter, StyledFooterDiv, StyledBR, StyledIMG } from './StyledComponents';

const logo_1: string = require('../content/images/icons/IKS_LOGO_weiss-300x104.png')
const logo_2: string = require('../content/images/icons/logo_baum.png')

interface FooterProps { }

const Footer: React.SFC<FooterProps> = () => (
  <StyledFooter>
    <StyledFooterDiv>
      <H4Footer>Interkultureller Sozialdienst</H4Footer>
      <PFooter>
        <StyledBR />
        Plaza De Rosalia 1
        <StyledBR />
        30449 Hannover
        <StyledBR />
        <StyledBR />
        TEL   0511 - 210 10 44
        <StyledBR />
        FAX    0511 - 210 10 66
        <StyledBR />
        <StyledBR />
        MAIL   iks-hannover@iks-hannover.de
        <StyledBR />
        <StyledBR />
        <StyledIMG src={logo_1} />
      </PFooter>
    </StyledFooterDiv>
    <StyledFooterDiv>
      <H4Footer>Außerklinische Intensiv- und Beatmungspflege</H4Footer>
      <PFooter>
        <StyledBR />
        Voßstraße 1
        <StyledBR />
        30161 Hannover
        <StyledBR />
        <StyledBR />
        TEL 0511 - 866 43 43 4
        <StyledBR />
        FAX 0511 - 866 43 43 5
        <StyledBR />
        <StyledBR />
        <StyledBR />
        <StyledIMG src={logo_2} />
      </PFooter>
    </StyledFooterDiv>
  </StyledFooter>
)

export default Footer
