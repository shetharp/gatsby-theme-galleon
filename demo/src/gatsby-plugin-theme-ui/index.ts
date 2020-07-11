import { merge } from "theme-ui";
import { themePolaroid, ThemePolaroid } from "@shetharp/gatsby-theme-polaroid";

const fonts: ThemePolaroid["fonts"] = {
  body:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  heading:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

export const themeSite = merge(themePolaroid, {
  // ==================================================
  // This site's theme overrides
  // https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
  // ==================================================
  // TODO
  colors: {
    primary: "mediumvioletred",
  },
  fonts,
});
export default themeSite;
