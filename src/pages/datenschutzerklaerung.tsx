import React from "react";

import Helmet from "react-helmet";

import Heading from "../components/heading/Heading";
import Text from "../components/text/Text";

const PrivacyPage = () => (
  <>
    <Helmet
      title="Datenschutzerklärung - Interkultureller Pflegedienst Hannover"
      meta={[
        {
          name: "description",
          content:
            "Hier finden Sie die Datenschutzerklärung des Interkulturellen Pflegedienst Hannover"
        }
      ]}
    />
    <div className="max-container">
      <div className="text-container">
        <div className="padding-heading">
          <Heading size={1} uppercase center orange fontWeight={500}>
            Datenschutzerklärung
          </Heading>
        </div>
        <Heading size={4} orange>
          Herzlich willkommen auf unserer Webseite.
        </Heading>

        <Text>
          Bei einem Besuch auf unserer Webseite werden personenbezogene Daten
          bei uns erhoben, verarbeitet und genutzt. Diese werden jedoch nach den
          gesetzlichen Vorschriften geschützt, denn der Schutz Ihrer
          persönlichen Daten hat bei uns höchste Priorität.
        </Text>

        <Text>
          Im Folgenden finden Sie Informationen darüber, wie wir diese Daten
          erfassen, für uns nutzen und schützen. Bitte nehmen Sie sich kurz
          Zeit, um die folgenden Angaben sorgfältig durchzulesen.
        </Text>

        <Text>
          Verantwortliche Stelle für die Verarbeitung Ihrer personenbezogenen
          Daten ist:
        </Text>

        <div>Interkultureller Sozialdienst GmbH</div>
        <div>Plaza de Rosalia 1 20449 Hannover</div>
        <div>0511 – 2101044</div>
        <a
          className="color-blue"
          title="Email Adresse des interkulturellen Pfelgedienst Hannover"
          href="mailto:iks-hannover@iks-hannover.de"
        >
          iks-hannover@iks-hannover.de
        </a>
        <Heading size={4} orange>
          Erhebung und Verarbeitung von Daten
        </Heading>
        <Text>
          Jeder Besuch unserer Webseite wird erfasst. Dabei werden folgende
          Daten automatisch gespeichert:
        </Text>
        <ul>
          <li className="color-orange">
            <Text>Aufgerufene Webseite</Text>
          </li>
          <li className="color-orange">
            <Text>Unterseite, oder Datei</Text>
          </li>
          <li className="color-orange">
            <Text>Datum und Uhrzeit und Dauer des Abrufs</Text>
          </li>
          <li className="color-orange">
            <Text>IP-Adresse</Text>
          </li>
          <li className="color-orange">
            <Text>Übertragene Datenmenge</Text>
          </li>
          <li className="color-orange">
            <Text>Verwendetes Betriebssystem</Text>
          </li>
          <li className="color-orange">
            <Text>
              Browser und Browsertyp Die Internetseite, von der weitergeleitet
              wurde
            </Text>
          </li>
        </ul>
        <Text>
          Keine dieser genannten Daten geben Rückschlüsse zu Ihrer Person
          wieder. Wir brauchen sie lediglich, um die Darstellung und Wirkung
          unserer Webseite besser nachvollziehen zu können und im Falle eines
          Hackerangriffs strafrechtliche Verfolgungen unterstützen zu können.
        </Text>
        <Text>
          Sollten andere personenbezogene Daten (wie z.B. Name, Anschrift,
          E-Mail-Adresse etc.) erhoben werden, geschieht dies nur mit Ihrer
          Einwilligung. Dabei werden diese Daten durch uns entlang der
          Vorschriften des Telemediengesetztes (TMG) und des DSG-EKD erhoben,
          verarbeitet und geschützt. Ein Widerruf Ihrerseits ist jederzeit ohne
          Angaben von Gründen möglich.
        </Text>

        <Heading size={4} orange>
          Nutzung und Weitergabe personenbezogener Daten
        </Heading>
        <Text>
          Sollten Sie bei uns personenbezogene Daten hinterlassen haben,
          verwenden wir sie entlang der gesetzlichen Bestimmungen für den
          Datenschutz – z.B. um Ihre Fragen zu beantworten, Verträge zu
          erstellen, abzuwickeln oder zu beenden und für unsere technische
          Administration.
        </Text>
        <Text>
          Zum Zweck der Vertragserfüllung werden Ihre Daten gegebenenfalls an
          Dritte übermittelt, z.B. Weitergabe von Bestell- oder Abrechnungsdaten
          bei der Einbindung von Dienstleistern und Lieferanten etc. Diese
          vertragsgebundene Einwilligung können Sie jederzeit einsehen und
          widerrufen.
        </Text>

        <Heading size={4} orange>
          Betroffenenrechte
        </Heading>
        <Text>
          Es steht Ihnen gemäß §19 DSG-EKD zu, sich Auskunft über die
          Verarbeitung Ihrer personenbezogenen Daten geben zu lassen. Zusätzlich
          haben Sie ein Recht auf Berichtigung, Löschung oder eine Einschränkung
          in der Verarbeitung Ihrer Daten gemäß §20, §21, §22 und §24 des
          DSG-EKD. Wenn Sie von diesem Recht Gebrauch machen möchten, nehmen Sie
          bitte Kontakt zu unserem Datenschutzbeauftragten auf. Außerdem können
          Sie gemäß §25 DSG-EKD jederzeit der Verarbeitung Ihrer
          personenbezogenen Daten widersprechen.
        </Text>
        <Text>
          Des Weiteren steht es Ihnen zu, sich jederzeit bei der zuständigen
          Aufsichtsbehörde zu beschweren, falls Sie der Meinung sind, Ihre
          personenbezogenen Daten werden nicht gemäß der Datenschutzgesetze
          verarbeitet. Wir wären Ihnen trotzdem sehr dankbar, wenn Sie sich in
          diesem Fall zuerst an unseren Datenschutzbeauftragten wenden.
        </Text>

        <Heading size={4} orange>
          Schutz der gespeicherten Daten
        </Heading>
        <Text>
          Bei uns werden technische und organisatorische Sicherheitsmaßnahmen
          ergriffen, um Ihre uns zur Verfügung gestellten persönlichen Daten vor
          Manipulation, Verlust oder dem Zugriff unberechtigter Personen zu
          schützen.
        </Text>
        <Text>
          Nicht auszuschließen ist jedoch, dass von Ihnen unverschlüsselt
          übermittelte Daten von Dritten während der Übermittlung eingesehen
          werden können. Wir müssen an dieser Stelle darauf hinweisen, dass bei
          der Datenübertragung durch das Internet (z.B. bei der Kommunikation
          per E-Mail) keine abschließend sichere Übertragung von Daten
          garantiert werden kann. Empfindliche Daten sollten daher entweder gar
          nicht oder nur über eine sichere Verbindung (SSL) über das Internet
          übertragen werden.
        </Text>
        <Heading size={4} orange>
          Örtlich Beauftragter für den Datenschutz
        </Heading>
        <Text>
          Sollten Sie Fragen zu unserer Datenschutzverordnung haben, wenden Sie
          sich bitte an unseren örtlichen Datenschutzbeauftragten: Wolfgang Sick
        </Text>
        <a
          className="color-blue"
          title="Email Adresse des interkulturellen Pflegedienst Hannover"
          href="mailto:datenschutz@iks-hannover.de"
        >
          datenschutz@iks-hannover.de
        </a>
      </div>
    </div>
  </>
);

export default PrivacyPage;
