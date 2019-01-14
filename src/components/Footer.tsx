import * as React from 'react'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'
import Link from 'gatsby-link'

const logo_1: string = require('../images/icons/IKS_LOGO_weiss-300x104.png')
const logo_2: string = require('../images/icons/logo_baum.png')

interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => (
  <FooterDiv>
    <StyledFooter>
      <StyledFooterDiv>
        <H4Footero>Interkultureller Sozialdienst</H4Footero>
        <PFooter>
          <StyledBR />
          Plaza De Rosalia 1<StyledBR />
          30449 Hannover
          <StyledBR />
          <StyledBR />
          Tel. 0511 - 210 10 44
          <StyledBR />
          Fax 0511 - 210 10 66
          <StyledBR />
          <StyledBR />
          Mail:{' '}
          <LinkEmailOut title='Email Adresse des interkulturellen Pfelgedienst Hannover' href='mailto:iks-hannover@iks-hannover.de'>
            iks-hannover@iks-hannover.de
          </LinkEmailOut>
          <StyledBR />
          Impressum:{' '}
          <LinkEmail to='/impressum' title='Link zu der Seite impressum des Pflegedienstes'>
            Impressum
          </LinkEmail>
          <StyledBR />
          Sitemap:{' '}
          <LinkEmail to='/sitemap' title='Link zu dem Inhaltsverzeichnis des Pflegedienstes'>
            Inhaltsverzeichnis
          </LinkEmail>
          <StyledBR />
          Datenschutzerklärung:{' '}
          <LinkEmail to='/datenschutzerklaerung' title='Link zu der Datenschutzerklärung des Pflegedienstes'>
            Datenschutzerklärung
          </LinkEmail>
          <StyledBR />
          <StyledBR />
          <StyledIMG src={logo_1} />
        </PFooter>
      </StyledFooterDiv>
      <StyledFooterDiv>
        <H4Footero>Außerklinische Intensiv- und Beatmungspflege</H4Footero>
        <PFooter>
          <StyledBR />
          Voßstraße 1<StyledBR />
          30161 Hannover
          <StyledBR />
          <StyledBR />
          Tel. 0511 - 866 43 43 4<StyledBR />
          Fax 0511 - 866 43 43 5<StyledBR />
          <StyledBR />
          <StyledBR />
          <StyledIMG src={logo_2} />
        </PFooter>
      </StyledFooterDiv>
    </StyledFooter>
    <LinkEmailOutWtMargin title='link zu der immajung seite' href='https://www.immajung.com'>
      code by immajung
    </LinkEmailOutWtMargin>
  </FooterDiv>
)
export default Footer

export const FooterDiv = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  background-color: ${colors.orange};
`

export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`

export const StyledFooterDiv = styled.div`
  text-align: left;
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
`

export const H4Footero = styled.h4`
  color: ${colors.white};
  font-weight: 500;
  /* padding: 1.4rem; */
`

export const PFooter = styled.p`
  color: ${colors.white};
`

export const StyledIMG = styled.img`
  width: auto;
  height: 100px;
`

export const StyledBR = styled.br``

export const LinkEmail = styled(Link)`
  cursor: pointer;
  color: ${colors.white};
  text-decoration: underline;
  text-decoration-color: white;
`
export const LinkEmailOut = styled.a`
  cursor: pointer;
  color: ${colors.white};
  text-decoration: underline;
  text-decoration-color: white;
`
export const LinkEmailOutWtMargin = styled.a`
  display: block;
  cursor: pointer;
  color: ${colors.white};
  text-decoration: underline;
  text-decoration-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const LinkWhite = styled.a`
  color: ${colors.white};
`
