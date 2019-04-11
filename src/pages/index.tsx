import React from 'react'
import EmployeeTile from '../components/EmployeeTile'
import FourColumns from '../components/FourColumns'
import Heading from '../components/heading/Heading'
import HeroSlider from '../components/HeroSlider'
import Layout from '../components/Layout'
import Text from '../components/text/Text'

const signatureJasmin: string = require('../images/mitarbeiter/unterschrift_Jasmin.png')
const jasminImage: string = require('../images/mitarbeiter//Mitarbeiter_Jasmin_2.jpg')
const signatureGalina: string = require('../images/mitarbeiter/unterschrift_Galina.png')
const galinaImage: string = require('../images/mitarbeiter/Galina.jpg')

export default () => (
  <Layout>
    <HeroSlider />
    <div className='max-container'>
      <div className='text-container' style={{ paddingTop: '2.4rem' }}>
        <Heading size={1} uppercase center orange fontWeight={500}>
          Herzlich Willkommen
        </Heading>
        <div style={{ margin: '0.824rem' }}>
          <Heading size={4} center orange fontWeight={500}>
            auf der Homepage des Interkulturellen Sozialdienstes in Hannover
          </Heading>
        </div>
        <Text center>Liebe BesucherInnen,</Text>
        <Text center>
          unsere Internetseite soll Ihnen dabei helfen, sich ein Bild von unserem Pflegedienst zu machen. Hier bekommen Sie Informationen zu
          ambulanten und medizinischen Leistungen, zu unseren Leitbildern, unserem Team und zu Leistungen, die wir zusätzlich anbieten und
          durch die wir uns von anderen Pflegediensten unterscheiden.
        </Text>
        <Text center>Herzlichst, Ihre</Text>
      </div>
      <div className='employeee-tile-container'>
        <EmployeeTile
          title='Jasmin Arbabian-Vogel'
          alt='Bild von Jasmin Arbabian-Vogel'
          name={'Jasmin Arbabian-Vogel'}
          job={'Geschäftsführerin'}
          image={jasminImage}
          signature={signatureJasmin}
        />
        <EmployeeTile
          title='Jasmin Galina Fiksman'
          alt='Bild von Jasmin Galina Fiksman'
          name={'Galina Fiksman'}
          job={'Geschäftsführerin'}
          image={galinaImage}
          signature={signatureGalina}
        />
      </div>
      <FourColumns />
    </div>
  </Layout>
)
