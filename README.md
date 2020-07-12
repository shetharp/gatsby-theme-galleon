# gatsby-theme-galleon-workspace

![Galleon Banner](./demo/static/banner.png)

Galleon is a Gatsby theme built on top of [`@lekoarts/gatsby-theme-minimal-blog`](https://www.gatsbyjs.org/packages/@lekoarts/gatsby-theme-minimal-blog/).
Use Galleon to quickly build a gorgeous developer blog with support for Typescript, MDX, syntax-highlighted code blocks, and tags.

# Install the Galleon Theme

1. Add the theme as a dependency to your Gatsby site.

```shell
npm i --save @shetharp/gatsby-theme-galleon
# or
yarn add @shetharp/gatsby-theme-galleon
```

2. Add the theme to your `gatsby-config.js` file

```js:title=gatsby-config.js
module.exports = {
  plugins: ["@shetharp/gatsby-theme-galleon"],
};
```

3. Modify the [theme options](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog) and site metadata in your `gatsby-config.js` file.

4. Create `.mdx` files for your site's pages or posts.

5. Shadow, override, and customize the theme to fit your needs.

---

# Start with the Galleon Workspace

To start developing your own theme using this repo as a starting point:

```shell
gatsby new gatsby-theme-custom https://github.com/shetharp/gatsby-theme-galleon-workspace
cd gatsby-theme-custom
yarn
yarn workspace demo develop
```

_Replace `gatsby-theme-custom` with whatever you wish to name your theme._

The `theme` workspace directory contains the components, styles, and theme configurations.

- You should update the `package.json` to match the details for your theme (such as name, author, repository, etc.)
- This workspace can be used to publish your theme as its own npm package

The `demo` workspace directory contains the content, components, and styles for an example site that consumes the theme.

- You should update the `package.json` to include your theme as a dependency. Make sure the name of the dependency matches the name in your theme's `package.json` file!
- You should then update the `gatsby-config.js` to include your theme as a plugin
- This workspace can be used to deploy a demo site for your theme

---

# Features

Galleon builds on top of the features provided in [@lekoarts/gatsby-theme-minimal-blog](https://www.gatsbyjs.org/packages/@lekoarts/gatsby-theme-minimal-blog/).

- MDX
- Theme UI
- Light mode / Dark mode
- Typography driven, minimal style
- Tags/Categories support
- Syntax highlighting for code blocks with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support. Also allows adding line numbers, line highlighting, language tabs, and file titles.

## Code Highlighting

If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@shetharp/gatsby-theme-galleon/styles/code.js`.

#### Language tabs:

When you add a language (such as e.g. js or javascript) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

#### Code titles:

You can display a title (e.g. the file path) above the code block.

````
```jsx:title=your-title
// code goes here
```
````

Or without a specific language:

````
```:title=your-title
// code goes here
```
````

#### Line highlighting:

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js {2,4-5}
const test = 3;
const foo = "bar";
const harry = "potter";
const hermione = "granger";
const ron = "weasley";
```
````

#### Hide line numbers:

If you want to hide line numbers you can either globally disable them (see Theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```noLineNumbers
// code goes here
```
````

## Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme!
In general, you will want to place your files in `src/@shetharp/gatsby-theme-galleon/` to shadow or override files.

## Adding content

### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page.
They can be added by creating MDX files inside `content/posts`. General setup:

- Create a new folder inside `content/posts`
- Create a new `index.mdx` file, and add the frontmatter
- Add images to the created folder (from step 1) you want to reference in your blog post
- Reference an image as your `banner` in the frontmatter
- Write your content below the frontmatter
- Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

```mdx
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
---

Blog post content goes here...
```

📍 **The fields description and banner are optional!**
If no description is provided, an excerpt of the blog post will be used.
If no banner is provided, the default siteImage (from siteMetadata) is used.

📍 The date field has to be written in the format `YYYY-MM-DD`!

### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page.
You'll manually need to link to those pages, for example by adding them to the navigation (in siteMetadata). General instructions:

- Create a new folder inside `content/pages`
- Create a new `index.mdx` file, and add the frontmatter
- Write your content below the frontmatter
- Optionally add files/images to the folder you want to reference from the page

```mdx
---
title: About
slug: "/about"
---

Page content goes here...
```

### Changing homepage text

- To edit the hero text ("Ahoy! This is Galleon &ndash; a Gatsby theme...), create a file at `src/@shetharp/gatsby-theme-galleon/texts/hero.mdx` to shadow the text.
- To edit the projects part below "Latest posts", create a file at `src/@shetharp/gatsby-theme-galleon/texts/bottom.mdx` to shadow the contents.
