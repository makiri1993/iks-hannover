import * as React from 'react'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'

const logo_1: string = require('../images/icons/IKS_LOGO_weiss-300x104.png')
const logo_2: string = require('../images/icons/logo_baum.png')

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
        MAIL: <LinkEmail title="Email Adresse des interkulturellen Pfelgedienst Hannover" href="mailto:iks-hannover@iks-hannover.de" >iks-hannover@iks-hannover.de</LinkEmail>
        <StyledBR />
        Impressum: <LinkWhite href="/impressum" title="Link zu der Seite impressum des Pflegedienstes">Impressum</LinkWhite>
        <StyledBR />
        Sitemap: <LinkWhite href="/sitemap" title="Link zu dem Inhaltsverzeichnis des Pflegedienstes">Inhaltsverzeichnis</LinkWhite>
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
  width: 500px;
`

export const H4Footer = styled.h4`
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

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`
export const LinkWhite = styled.a`
  color: ${colors.white};
`
