import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { dimensions, colors, breakpoints } from '../styles/variables'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet
      title={'Intensivpflege - Interkultureller Pflegedienst Hannover'}
      meta={[
        {
          name: 'description',
          content:
            'Hier finden Sie alle Informationen zur Intensivpfelge von unserem Pflegedienst. Wir beiten eine intensivpflegerische Versorgung zu Hause oder in einer ambulant betreuten Wohngemeinschaft.',
        },
      ]}
    />
    <CenteredText>
      <CenteredH1Green>UNSERE BERATUNGSLEISTUNG</CenteredH1Green>
      <PflegedienstP>
        Es geschieht oft ganz plötzlich: Ein Mensch erkrankt an Demenz oder er ist körperlich nicht mehr in der Lage, seinen Alltag zu
        meistern. „Und wer pflegt Oma?“ ist dann die häufige Frage innerhalb einer Familie. Von jetzt auf gleich muss ein Angehöriger
        gepflegt werden – keine leichte Aufgabe.
        <StyledBR />
        <StyledBR />
        „Wir tun alles, um den auf Hilfe oder Assistenz angewiesenen Menschen die bestmögliche Versorgung zu verschaffen, sie zu
        unterstützen und deren Angehörige auf die verantwortungsvolle Aufgabe vorzubereiten“, sagt Jasmin Arbabian-Vogel. Die
        Geschäftsführerin des Unternehmens weiß, wie schwer es sein kann, wie viele Bedenken oder Berührungsängste jemand vielleicht haben
        mag, der in eine solche Situation gerät.
        <StyledBR />
        <StyledBR />
      </PflegedienstP>
    </CenteredText>
  </Layout>
)

export const PRed = styled.p`
  font-style: italic;
  color: ${colors.red};
`

export const PItalicAndSmall = styled.p`
  font-size: 12px;
`

export const StyledUL = styled.ul``

export const StyledLI = styled.li`
  color: ${colors.red};
`

export const LinkRed = styled.a`
  color: ${colors.red};
`

export const StyledSpan = styled.span`
  color: ${colors.black};
  font-size: 16px;
`

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`

export const CenteredH4Red = styled.h4`
  color: ${colors.red};
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const StyledIMG = styled.img`
  width: auto;
  height: 100px;
`

export const DivCenter = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`

export const CenteredText = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`
export const CenteredH1 = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 35px;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    font-weight: 300;
  }
`

export const CenteredH1Red = styled(CenteredH1)`
  color: ${colors.red};
`

export const StyledBR = styled.br``

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CenteredH1Green = styled(CenteredH1)`
  color: ${colors.green};
`

export const CenteredH4Green = styled(CenteredH4)`
  color: ${colors.green};
`
export const PflegedienstP = styled.p``

export const PflegedienstPGreen = styled(PflegedienstP)`
  color: ${colors.green};
`

export const ButtonGreen = styled.a`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 25px 25px 25px 25px;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`

export const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const DivCenterRow = styled(StyledFooter)`
  background-color: ${colors.white};
  flex-direction: row;
`
