function GatsbyConfig(options) {
  // TODO -- some of these custom options should be defined in the demo site instead...
  const customOptions = {
    ...options,
    feed: true,
    feedTitle: "TODO Feed Title",
  };

  return {
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog`,
        options: customOptions,
      },
    ],
  };
}
module.exports = GatsbyConfig;
