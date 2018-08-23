import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import EmployeeTile from '../components/EmployeeTile'
import styled from 'styled-components'
import { colors, dimensions } from '../styles/variables'

const galinaImage: string = require('../images/mitarbeiter/Galina.jpg')
const marionImage: string = require('../images/mitarbeiter/Marion.jpg')
const agniImage: string = require('../images/mitarbeiter/Agnieszka.jpg')
const ardiImage: string = require('../images/mitarbeiter/Ardi.jpg')
const birgitImage: string = require('../images/mitarbeiter/Birgit.jpg')
const jasminImage: string = require('../images/mitarbeiter/Jasmin.jpg')
const michaImage: string = require('../images/mitarbeiter/Michael.jpg')
const simoneImage: string = require('../images/mitarbeiter/Simone.jpg')
const tabeaImage: string = require('../images/mitarbeiter/Tabea.jpg')
const uteImage: string = require('../images/mitarbeiter/Ute.jpg')
const yurekImage: string = require('../images/mitarbeiter/Yurek.jpg')
const teamImage: string = require('../images/mitarbeiter/TEAM-1.jpg')

class Mitarbeiter {
  title: string
  alt: string
  name: string
  job: string
  email: string
  image: string

  constructor(title: string, alt: string, name: string, job: string, email: string, image: string) {
    this.title = title
    this.alt = alt
    this.name = name
    this.job = job
    this.email = email
    this.image = image
  }
}

const mitarbeiterTeam: Mitarbeiter[] = [
  new Mitarbeiter(
    'Galina Fiksman',
    'Bild von Galina Fiksman',
    'Galina Fiksman',
    'Geschäftsführerung',
    'fiksmann@iks-hannover.de',
    galinaImage
  ),
  new Mitarbeiter(
    'Jasmin Arbabian-Vogel',
    'Bild von Jasmin Arbabian-Vogel',
    'Jasmin Arbabian-Vogel',
    'Geschäftsführerung',
    'arabian-vogel@iks-hannover.de',
    jasminImage
  ),
  new Mitarbeiter(
    'Tabea Emrich',
    'Bild von Tabea Emrich',
    'Tabea Emrich',
    'Assistenz der Geschäftsführerung',
    'emrich@iks-hannover.de',
    tabeaImage
  ),
  new Mitarbeiter('Ute Rhein', 'Bild von Ute Rhein', 'Ute Rhein', 'Pflegedienstleitung', 'rhein@iks-hannover.de', uteImage),
  new Mitarbeiter(
    'Marion Hartmann',
    'Bild von Marion Hartmann',
    'Marion Hartmann',
    'Leitungs Intensivpflege + Intensivwohngemeinschaft',
    'spouncer@iks-hannover.de',
    marionImage
  ),
  new Mitarbeiter(
    'Agnieszka Spouncer',
    'Bild von Agnieszka Spouncer',
    'Agnieszka Spouncer',
    'Fachliche Leitung Intensivpflege',
    'spouncer@iks-hannover.de',
    agniImage
  ),
  new Mitarbeiter(
    'Jurek Jablonski',
    'Bild von Jurek Jablonski',
    'Jurek Jablonski',
    'Praxisanleiter und Mentor',
    'jablonski@iks-hannover.de',
    yurekImage
  ),
  new Mitarbeiter(
    'Birgit Anspach',
    'Bild von Birgit Anspach',
    'Birgit Anspach',
    'Planung und Personal',
    'anspach@iks-hannover.de',
    birgitImage
  ),
  new Mitarbeiter(
    'Simone Wiesner',
    'Bild von Simone Wiesner',
    'Simone Wiesner',
    'Verwaltung und Rechnungswesen',
    'wiesner@iks-hannover.de',
    simoneImage
  ),
  new Mitarbeiter('Ardi Rezaie', 'Bild von Ardi Rezaie', 'Ardi Rezaie', 'Fuhrparkmanagement', 'rezaie@iks-hannover.de', ardiImage),
  new Mitarbeiter('Michael Krowas', 'Bild von Michael Krowas', 'Michael Krowas', 'Facility Manager', '', michaImage)
]

export default () => (
  <Page>
    <Container>
      <BigTextInOrange>UNSER TEAM</BigTextInOrange>
      <FlexDivContentCenter>
        {mitarbeiterTeam.map(el => (
          <MarginForTile>
            <EmployeeTile team title={el.title} alt={el.alt} name={el.name} job={el.job} image={el.image} email={el.email} />
          </MarginForTile>
        ))}
        <TeamImage src={teamImage} alt="Bild vom Team" />
      </FlexDivContentCenter>
    </Container>
  </Page>
)

export const BigTextInOrange = styled.div`
  font-size: ${dimensions.headingSizes.siteHeader}rem;
  text-align: center;
  margin: 1.5rem;
  color: ${colors.orange};
`

export const FlexDivContentCenter = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const MarginForTile = styled.div`
  margin: 0.1rem;
`

export const TeamImage = styled.img`
  margin-top: 6rem;
`
