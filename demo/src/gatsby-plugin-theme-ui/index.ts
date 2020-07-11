import { merge } from "theme-ui";
import { themeGalleon, ThemeGalleon } from "@shetharp/gatsby-theme-galleon";
import "typeface-dm-sans";

/**
 * The fonts for this site.
 *
 * "DM Sans" is imported as an npm package `typeface-dm-sans`, allowing it to be self-hosted.
 * Learn more about the Typefaces Project: https://github.com/KyleAMathews/typefaces
 *
 * "DM Mono" is imported with `gatsby-plugin-web-font-loader` from Google Fonts.
 * This plugin can also be used for Adobe Fonts (Typekit).
 */
const fonts: ThemeGalleon["fonts"] = {
  body:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  monospace: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * The theme overrides for this site.
 *
 * https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
 * https://theme-ui.com/guides/merging-themes/
 */
export const themeSite = merge(themeGalleon, {
  fonts,
});
export default themeSite;
