function GatsbyConfig(options) {
  return {
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog`,
        options: options,
      },
    ],
  };
}
module.exports = GatsbyConfig;
