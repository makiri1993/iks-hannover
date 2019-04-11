module.exports = {
  siteMetadata: {
    title: 'Interkultureller Pflegedienst Hannover',
    description:
      'Interkultureller Pflegedienst Hannover - ist seit 1998 der ambulante Pflegedienst im Raum Hannover in den Bereichen Altenpflege und Krankenpflege. Unsere hoch kompetenten und qualifizierten Pflegekräfte kümmern sich sehr gerne um Sie und Ihre Familienangehörigen.',
    title: 'Interkultureller Sozialdienst Hannover',
    description:
      'Interkultureller Sozialdienst Hannover - ist seit 1998 der ambulante Pflegedienst im Raum Hannover in den Bereichen Altenpflege und Krankenpflege. Unsere hoch kompetenten und qualifizierten Pflegekräfte kümmern sich sehr gerne um Sie und Ihre Familienangehörigen.',
    siteUrl: 'https://www.interkulturellepflege.de',
    keywords: 'Altenpflege, Interkuller, Pflegedienst, Hannover, Ambulant, Intensivpflege, Pflegegerade',
    author: {
      name: 'Martin Kiriew',
      url: 'https://www.immajung.com',
      email: 'kireew.martin@icloud.com',
    },
    author: {
      name: 'Karim Ould Mahieddine',
      url: 'https://www.immajung.com',
      email: 'karim_om@me.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.interkulturellepflege.de',
        sitemap: 'https://www.interkulturellepflege.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          // 'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
  ],
}
