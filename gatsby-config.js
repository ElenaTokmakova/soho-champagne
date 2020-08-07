module.exports = {
  siteMetadata: {
    title: `Topaz`,
    description: `New generation landing pages built with ReactJS, GatsbyJS and Styled Components`,
    author: `Suhas Holla <suhas@rapidmind.in>`,
  },
  plugins: [
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            minify: false, // Breaks styles if not set to false
        },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `pagedata`,
        path: `./src/pagedata/`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { 
        resolve: `gatsby-source-filesystem`, 
        options: { path: `./static/` }
    },
    { 
        resolve: `gatsby-source-filesystem`, 
        options: { path: `./src/assets/` }
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
        name: `Topaz Real Estate`,
        short_name: `Topaz`,
        start_url: `/`,
        background_color: `#eb3925`,
        theme_color: `#eb3925`,
        display: `minimal-ui`,
        icon: `src/images/topaz.png`, // This path is relative to the root of the site.
        icons: [
            {
                src: `/favicons/topaz.png`,
                sizes: `512x512`,
                type: `image/png`,
            }
            ], // Add or remove icon sizes as desired
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-156885111-5",
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
