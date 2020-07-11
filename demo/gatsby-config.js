module.exports = {
  // TODO - Update site metadata to reflect your site's info
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Galleon`,
    // Default title of the page
    siteTitleAlt: `Site Title Alt`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Site Headline`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://arpitsheth.com`,
    // Used for SEO
    siteDescription: `Site description`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@shetharp`,
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-galleon`,
      options: {
        // TODO - Add more options if needed
        // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#theme-options

        // TODO - Update navigation items for your site
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

        // TODO - Update external links for your site
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
        feed: true,
        feedTitle: "TODO Feed Title", // TODO - Update RSS feed title for your site
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID, // TODO - Configure Google Analytics for your site
      },
    },
    `gatsby-plugin-sitemap`,
    {
      // TODO - Update manifest options for your site
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manifest Name`,
        short_name: `short-name`,
        description: `Manifest description`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
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
    {
      // TODO - Update webfonts for your site.
      // Alternatively, you can install Google Fonts as npm packages with the Typefaces Project
      // Learn more: https://github.com/KyleAMathews/typefaces
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["DM Mono:400,400i,700,700i"],
        },
      },
    },
  ],
};
