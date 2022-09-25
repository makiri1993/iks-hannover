export const NavigationTiles: {
  title: string;
  subTitles?: { title: string }[];
}[] = [
  {
    title: "Homepage",
    subTitles: [{ title: "Unser Pflegedienst" }, { title: "LeitBilder" }],
  },
  {
    title: "Leistungsbereiche",
    subTitles: [
      { title: "Ambulante Pflege" },
      { title: "Wohngemeinschaften" },
      { title: "Außerklinische Intensivpflege" },
      { title: "Tagespflege" },
    ],
  },
  { title: "Team" },
  { title: "Jobs", subTitles: [{ title: "Stellenangebot" }] },
  { title: "Engagement|Partner" },
  { title: "Presse" },
];
