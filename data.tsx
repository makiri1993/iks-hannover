export const Paths = {
  Index: "/",
  OurNursingService: "/ourNursingService",
  LeitBilder: "/missionStatement",
  AmbulantePflege: "/ambulantCare",
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
      { title: "Wohngemeinschaften", path: Paths.OurNursingService },
      { title: "Außerklinische Intensivpflege", path: Paths.OurNursingService },
      { title: "Tagespflege", path: Paths.OurNursingService },
    ],
  },
  { title: "Team", path: Paths.OurNursingService },
  {
    title: "Jobs",
    path: Paths.OurNursingService,
    subTitles: [{ title: "Stellenangebot", path: Paths.OurNursingService }],
  },
  { title: "Engagement|Partner", path: Paths.OurNursingService },
  { title: "Presse", path: Paths.OurNursingService },
];
