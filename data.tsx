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
  Partner: "/engagementPartner",
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
    path: Paths.OurNursingService,
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
    subTitles: [{ title: "Stellenangebot", path: Paths.OurNursingService }],
  },
  { title: "Engagement|Partner", path: Paths.Partner },
  { title: "Presse", path: Paths.OurNursingService },
];
