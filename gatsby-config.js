module.exports = {
  siteMetadata: {
    title: `Daniel Scott's Portfolio`,
    description: `portfolio website`,
    author: `Daniel Scott`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/CMS`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      //tranformer remark parses markdown files with remark
      resolve : 'gatsby-transformer-remark',
      options: {
        plugins : [
          // helper plugin for remark images? convert image srcs to be relative to parent dir
          'gatsby-remark-relative-images',
          {
            //processes images in md to be used --- LOTS of good options for loading images properly and quickly from md
            resolve : 'gatsby-remark-images',
            options : {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
