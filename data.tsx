export const Paths = {
  Index: "/",
  OurNursingService: "/ourNursingService",
  LeitBilder: "/missionStatement",
  AmbulantePflege: "/ambulantCare",
  Wohngemeinschaften: "/sharedFlats",
  Tagespflege: "/daycare",
  AusserklinischeIntensivPflege: "/intensiveCare",
  UnserTeam: "/team",
  Jobs: "/jobs",
  Stellenanzeigen: "/advertisements",
  Partner: "/engagementPartner",
  Presse: "/magazines",
};

export const NavigationTiles: {
  title: string;
  path: string;
  subTitles?: { title: string; path: string }[];
}[] = [
  {
    title: "Homepage",
    path: Paths.Index,
    subTitles: [
      { title: "Unser Pflegedienst", path: Paths.OurNursingService },
      { title: "LeitBilder", path: Paths.LeitBilder },
    ],
  },
  {
    title: "Leistungsbereiche",
    path: "",
    subTitles: [
      { title: "Ambulante Pflege", path: Paths.AmbulantePflege },
      { title: "Wohngemeinschaften", path: Paths.Wohngemeinschaften },
      {
        title: "Außerklinische Intensivpflege",
        path: Paths.AusserklinischeIntensivPflege,
      },
      { title: "Tagespflege", path: Paths.Tagespflege },
    ],
  },
  { title: "Team", path: Paths.UnserTeam },
  {
    title: "Jobs",
    path: Paths.Jobs,
    subTitles: [{ title: "Stellenangebot", path: Paths.Stellenanzeigen }],
  },
  { title: "Engagement|Partner", path: Paths.Partner },
  { title: "Presse", path: Paths.Presse },
];

export const FooterData: {
  name: string;
  location: string;
  PLZ: string;
  phone: string;
  FAX: string;
  Mail?: string;
  image: string;
}[] = [
  {
    name: "Interkultureller Sozialdienst GmbH",
    location: "Plaza de Rosalia 1",
    PLZ: "30449 Hannover",
    phone: "0511 - 210 10 44",
    FAX: "0511 - 210 10 66",
    Mail: "iks-hannover@iks-hannover.de",
    image:
      "/Users/leonkireew/Code/techstudio-iks-Hannover/techstudio-iks-hannover/src/images/logo_baum.png",
  },
  {
    name: "Außerklinische Intensiv- und Beatmungspflege",
    location: "Voßstraße1",
    PLZ: "30161 Hannover",
    phone: "0511 - 866 43 43 4",
    FAX: "0511 - 866 43 43 5",
    image:
      "/Users/leonkireew/Code/techstudio-iks-Hannover/techstudio-iks-hannover/src/images/logo_baum.png",
  },
];
