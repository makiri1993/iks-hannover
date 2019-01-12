import * as React from 'react'
import Page from '../components/Page'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { colors } from '../styles/variables'
import Container from '../components/Container'
import { BigTextInOrange, H4Orange, CenteredPLeftWithMargin } from './leitbilder'

const PrivacyPage = () => (
  <Page>
    <Helmet
      title='Datenschutzerklärung - Interkultureller Pflegedienst Hannover'
      meta={[
        {
          name: 'description',
          content: 'Hier finden Sie die Datenschutzerklärung des Interkulturellen Pflegedienst Hannover'
        }
      ]}
    />
    <Container>
      <BigTextInOrange>Datenschutzerklärung</BigTextInOrange>

      <H4Orange>Herzlich willkommen auf unserer Webseite.</H4Orange>

      <CenteredPLeftWithMargin>
        Bei einem Besuch auf unserer Webseite werden personenbezogene Daten bei uns erhoben, verarbeitet und genutzt. Diese werden jedoch
        nach den gesetzlichen Vorschriften geschützt, denn der Schutz Ihrer persönlichen Daten hat bei uns höchste Priorität.
      </CenteredPLeftWithMargin>

      <CenteredPLeftWithMargin>
        Im Folgenden finden Sie Informationen darüber, wie wir diese Daten erfassen, für uns nutzen und schützen. Bitte nehmen Sie sich kurz
        Zeit, um die folgenden Angaben sorgfältig durchzulesen.
      </CenteredPLeftWithMargin>

      <CenteredPLeftWithMargin>Verantwortliche Stelle für die Verarbeitung Ihrer personenbezogenen Daten ist:</CenteredPLeftWithMargin>

      <CenteredPLeftWithMarginForPrivacy>Interkultureller Sozialdienst </CenteredPLeftWithMarginForPrivacy>
      <CenteredPLeftWithMarginForPrivacy>GmbH Plaza de Rosalia 1 20449 Hannover </CenteredPLeftWithMarginForPrivacy>
      <CenteredPLeftWithMarginForPrivacy>0511 – 2101044</CenteredPLeftWithMarginForPrivacy>
      <LinkEmailOut
        style={{ color: 'blue' }}
        title='Email Adresse des interkulturellen Pfelgedienst Hannover'
        href='mailto:iks-hannover@iks-hannover.de'
      >
        iks-hannover@iks-hannover.de
      </LinkEmailOut>
      <H4Orange>Erhebung und Verarbeitung von Daten</H4Orange>
      <CenteredPLeftWithMargin>
        Jeder Besuch unserer Webseite wird erfasst. Dabei werden folgende Daten automatisch gespeichert:
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Aufgerufene Webseite, Unterseite, oder Datei Datum und Uhrzeit und Dauer des Abrufs IP-Adresse Übertragene Datenmenge Verwendetes
        Betriebssystem Browser und Browsertyp Die Internetseite, von der weitergeleitet wurde
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Keine dieser genannten Daten geben Rückschlüsse zu Ihrer Person wider. Wir brauchen sie lediglich, um die Darstellung und Wirkung
        unserer Webseite besser nachvollziehen zu können und im Falle eines Hackerangriffs strafrechtliche Verfolgungen unterstützen zu
        können.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Sollten andere personenbezogene Daten (wie z.B. Name, Anschrift, E-Mail-Adresse etc.) erhoben werden, geschieht dies nur mit Ihrer
        Einwilligung. Dabei werden diese Daten durch uns entlang der Vorschriften des Telemediengesetztes (TMG) und des DSG-EKD erhoben,
        verarbeitet und geschützt. Ein Widerruf Ihrerseits ist jederzeit ohne Angaben von Gründen möglich.
      </CenteredPLeftWithMargin>

      <H4Orange>Nutzung und Weitergabe personenbezogener Daten</H4Orange>
      <CenteredPLeftWithMargin>
        Sollten Sie bei uns personenbezogene Daten hinterlassen haben, verwenden wir sie entlang der gesetzlichen Bestimmungen für den
        Datenschutz – z.B. um Ihre Fragen zu beantworten, Verträge zu erstellen, abzuwickeln oder zu beenden und für unsere technische
        Administration. Zum Zweck der Vertragserfüllung werden Ihre Daten gegebenenfalls an Dritte übermittelt, z.B. Weitergabe von Bestell-
        oder Abrechnungsdaten bei der Einbindung von Dienstleistern und Lieferanten etc. Diese vertragsgebundene Einwilligung können Sie
        jederzeit einsehen und widerrufen.
      </CenteredPLeftWithMargin>

      <H4Orange>Betroffenenrechte</H4Orange>
      <CenteredPLeftWithMargin>
        Es steht Ihnen gemäß §19 DSG-EKD zu, sich Auskunft über die Verarbeitung Ihrer personenbezogenen Daten geben zu lassen. Zusätzlich
        haben Sie ein Recht auf Berichtigung, Löschung oder eine Einschränkung in der Verarbeitung Ihrer Daten gemäß §20, §21, §22 und §24
        des DSG-EKD. Wenn Sie von diesem Recht Gebrauch machen möchten, nehmen Sie bitte Kontakt zu unserem Datenschutzbeauftragten auf.
        Außerdem können Sie gemäß §25 DSG-EKD jederzeit der Verarbeitung Ihrer personenbezogenen Daten widersprechen.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Des Weiteren steht es Ihnen zu, sich jederzeit bei der zuständigen Aufsichtsbehörde zu beschweren, falls Sie der Meinung sind, Ihre
        personenbezogenen Daten werden nicht gemäß der Datenschutzgesetze verarbeitet. Wir wären Ihnen trotzdem sehr dankbar, wenn Sie sich
        in diesem Fall zuerst an unseren Datenschutzbeauftragten wenden.
      </CenteredPLeftWithMargin>

      <H4Orange>Schutz der gespeicherten Daten</H4Orange>
      <CenteredPLeftWithMargin>
        Bei uns werden technische und organisatorische Sicherheitsmaßnahmen ergriffen, um Ihre uns zur Verfügung gestellten persönlichen
        Daten vor Manipulation, Verlust oder dem Zugriff unberechtigter Personen zu schützen.
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>
        Nicht auszuschließen ist jedoch, dass von Ihnen unverschlüsselt übermittelte Daten von Dritten während der Übermittlung eingesehen
        werden können. Wir müssen an dieser Stelle darauf hinweisen, dass bei der Datenübertragung durch das Internet (z.B. bei der
        Kommunikation per E-Mail) keine abschließend sichere Übertragung von Daten garantiert werden kann. Empfindliche Daten sollten daher
        entweder gar nicht oder nur über eine sichere Verbindung (SSL) über das Internet übertragen werden.
      </CenteredPLeftWithMargin>

      <H4Orange>Speicherung anonymisierter Daten/Cookies</H4Orange>
      <CenteredPLeftWithMargin>
        Auf dieser Webseite können sogenannte „Cookies“ eingesetzt werden, die Nutzungsdaten in anonymisierter Form sammeln und speichern.
        Dabei handelt es sich um Textdateien, die auf Ihrem Computer gespeichert werden und uns Auskunft über Ihre Benutzung unserer
        Webseite geben. Diese Dateien werden jedoch nur anonym erstellt und es ist nicht möglich, Sie anhand dieser Daten persönlich zu
        identifizieren. Wir verwenden diese Informationen lediglich, um unsere Webseitenaufrufe zu analysieren, um die Inhalte
        kontinuierlich anzupassen und zu verbessern.
      </CenteredPLeftWithMargin>

      <H4Orange>Örtlich Beauftragter für den Datenschutz</H4Orange>
      <CenteredPLeftWithMargin>
        Sollten Sie Fragen zu unserer Datenschutzverordnung haben, wenden Sie sich bitte an unseren örtlichen Datenschutzbeauftragten:
      </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>Herrn Wolfgang Sick </CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>Adresse</CenteredPLeftWithMargin>
      <CenteredPLeftWithMargin>E-Mail-Adresse</CenteredPLeftWithMargin>
    </Container>
  </Page>
)

export default PrivacyPage

export const LinkEmailOut = styled.a`
  cursor: pointer;
  color: ${colors.blue};
  text-decoration: underline;
  text-decoration-color: white;
`

export const CenteredPLeftWithMarginForPrivacy = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 0.6;
  text-align: left;
`
