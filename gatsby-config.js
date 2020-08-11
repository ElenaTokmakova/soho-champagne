module.exports = {
  siteMetadata: {
    title: `Soho Champagne`,
    description: `This 16th floor premium 1 bedroom unit in SOHO Champagne hotel-inspired condo offers the best in Ottawa's urban lifestyle. The unit features a range of luxury components, such as full hardwood floors, 9 feet ceilings, and Gluckstein Design kitchen with white quartz countertops, glass tile backsplash and integrated appliances (AEG Wall Oven, AEG Dishwasher, Fridge, Cook top, Panasonic Microwave, Bosch Washer and Dryer). The 3-piece bathroom includes polished marble tile and a walk-in shower...`,
    author: ``,
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
        name: `Soho Champagne Unit 1608`,
        short_name: `Soho Champagne`,
        start_url: `/`,
        background_color: `#eb3925`,
        theme_color: `#eb3925`,
        display: `minimal-ui`,
        icon: `src/images/house.png`, // This path is relative to the root of the site.
        icons: [
            {
                src: `/favicons/house.png`,
                sizes: `48x48`,
                type: `image/png`,
            }
            ], // Add or remove icon sizes as desired
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-96337374-1",
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
