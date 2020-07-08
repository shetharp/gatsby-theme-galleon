module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Polaroid`,
    // Default title of the page
    siteTitleAlt: `Site Title Alt`, // TODO
    // Can be used for e.g. JSONLD
    siteHeadline: `Site Headline`, // TODO
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://arpitsheth.com`,
    // Used for SEO
    siteDescription: `Site description`, // TODO
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`, // TODO
    // Twitter Handle
    author: `@shetharp`, // TODO
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-polaroid`,
      options: {
        // TODO -- Add more options if needed
        // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#theme-options

        navigation: [
          {
            title: `Theme Preview`,
            slug: `/theme-preview`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `404`,
            slug: `/404`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/shetharp`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/shetharp/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID, // TODO
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manifest Name`, // TODO
        short_name: `short-name`, // TODO
        description: `Manifest description`, // TODO
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`, // TODO -- should ideally pull from theme
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}