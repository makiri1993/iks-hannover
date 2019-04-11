import React from 'react'
import EmployeeTile from '../components/EmployeeTile'
import Layout from '../components/Layout'
import Heading from '../components/heading/Heading'

// tslint:disable-next-line:no-var-requires
const galinaImage: string = require('../images/mitarbeiter/Galina.jpg')
// tslint:disable-next-line:no-var-requires
const marionImage: string = require('../images/mitarbeiter/Marion.jpg')
// tslint:disable-next-line:no-var-requires
const marcoImage: string = require('../images/mitarbeiter/Marco.jpg')
// tslint:disable-next-line:no-var-requires
const ardiImage: string = require('../images/mitarbeiter/Ardi.jpg')
// tslint:disable-next-line:no-var-requires
const birgitImage: string = require('../images/mitarbeiter/Birgit.jpg')
// tslint:disable-next-line:no-var-requires
const jasminImage: string = require('../images/mitarbeiter/Jasmin.jpg')
// tslint:disable-next-line:no-var-requires
const joannaImage: string = require('../images/mitarbeiter/Joanna.jpg')
// tslint:disable-next-line:no-var-requires
const tabeaImage: string = require('../images/mitarbeiter/Tabea.jpg')
// tslint:disable-next-line:no-var-requires
const uteImage: string = require('../images/mitarbeiter/Ute.jpg')
// tslint:disable-next-line:no-var-requires
const yurekImage: string = require('../images/mitarbeiter/Yurek.jpg')
// tslint:disable-next-line:no-var-requires
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
    'Geschäftsführung',
    'fiksmann@iks-hannover.de',
    galinaImage,
  ),
  new Mitarbeiter(
    'Jasmin Arbabian-Vogel',
    'Bild von Jasmin Arbabian-Vogel',
    'Jasmin Arbabian-Vogel',
    'Geschäftsführung',
    'arbabian-vogel@iks-hannover.de',
    jasminImage,
  ),
  new Mitarbeiter(
    'Tabea Emrich',
    'Bild von Tabea Emrich',
    'Tabea Emrich',
    'Assistenz der Geschäftsführung',
    'emrich@iks-hannover.de',
    tabeaImage,
  ),
  new Mitarbeiter('Ute Rhein', 'Bild von Ute Rhein', 'Ute Rhein', 'Pflegedienstleitung', 'rhein@iks-hannover.de', uteImage),
  new Mitarbeiter(
    'Marion Hartmann',
    'Bild von Marion Hartmann',
    'Marion Hartmann',
    'Leitungs Intensivpflege + Intensivwohngemeinschaft',
    'spouncer@iks-hannover.de',
    marionImage,
  ),
  new Mitarbeiter(
    'Marco Schillaci',
    'Bild von Marco Schillaci',
    'Marco Schillaci',
    'Fachliche Leitung Intensivpflege',
    'schillaci@iks-hannover.de',
    marcoImage,
  ),
  new Mitarbeiter(
    'Jurek Jablonski',
    'Bild von Jurek Jablonski',
    'Jurek Jablonski',
    'Praxisanleiter und Mentor',
    'jablonski@iks-hannover.de',
    yurekImage,
  ),
  new Mitarbeiter(
    'Birgit Anspach',
    'Bild von Birgit Anspach',
    'Birgit Anspach',
    'Planung und Personal',
    'anspach@iks-hannover.de',
    birgitImage,
  ),
  new Mitarbeiter('Joanna Russ', 'Bild von Joanna Russ', 'Joanna Russ', 'Teamassistenz', 'iks-hannover@iks-hannover.de', joannaImage),
  new Mitarbeiter('Ardi Rezaie', 'Bild von Ardi Rezaie', 'Ardi Rezaie', 'Fuhrparkmanagement', 'rezaie@iks-hannover.de', ardiImage),
]

export default () => (
  <Layout>
      <Heading size={4} center orange uppercase>UNSER TEAM</Heading>
    <div className='max-container'>

      <div className='team-container'>
        {mitarbeiterTeam.map(el => (
          <div style={{marginLeft: '5rem'}}>

            <EmployeeTile team title={el.title} alt={el.alt} name={el.name} job={el.job} image={el.image} email={el.email}/>
          </div>
        ))}
        <img style={{marginBottom: '3rem'}} src={teamImage} alt='Bild vom Team'/>
      </div>
    </div>
  </Layout>
)
