module.exports = {
  siteMetadata: {
    title: "Interkultureller Socialdienst Hannover",
    description:
      "Interkultureller Socialdienst Hannover - ist seit 1998 der ambulante Pflegedienst im Raum Hannover in den Bereichen Altenpflege und Krankenpflege. Unsere hoch kompetenten und qualifizierten Pflegekräfte kümmern sich sehr gerne um Sie und Ihre Familienangehörigen.",
    title: "Interkultureller Sozialdienst Hannover",
    description:
      "Interkultureller Sozialdienst Hannover - ist seit 1998 der ambulante Pflegedienst im Raum Hannover in den Bereichen Altenpflege und Krankenpflege. Unsere hoch kompetenten und qualifizierten Pflegekräfte kümmern sich sehr gerne um Sie und Ihre Familienangehörigen.",
    siteUrl: "https://www.interkulturellepflege.de",
    keywords: "Altenpflege, Interkuller, Pflegedienst, Hannover, Ambulant, Intensivpflege, Pflegegerade",
    author: {
      name: "Martin Kiriew",
      url: "https://www.immajung.com",
      email: "kireew.martin@icloud.com",
    },
    author: {
      name: "Karim Ould Mahieddine",
      url: "https://www.immajung.com",
      email: "karim_om@me.com",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `content`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    {
      // resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.interkulturellepflege.de",
        sitemap: "https://www.interkulturellepflege.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
}
