import { merge } from "theme-ui";
import { themePolaroid, ThemePolaroid } from "@shetharp/gatsby-theme-polaroid";
import "typeface-dm-sans";

const fonts: ThemePolaroid["fonts"] = {
  body:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  monospace: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

export const themeSite = merge(themePolaroid, {
  // ==================================================
  // This site's theme overrides
  // https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
  // ==================================================
  // TODO
  fonts,
});
export default themeSite;
