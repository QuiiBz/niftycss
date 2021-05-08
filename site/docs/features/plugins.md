---
title: 'Plugins'
order: 3
---

NiftyCSS is easily extendible with plugins. There are very useful plugins created by Nifty, and others created by the community. Anyone can create a plugin, see [creating a plugin](#create-a-plugin).

## Table Of Contents

## Using plugins
To use a plugin, import it in your `nifty.ts` and add it to the `plugins` array of your `NiftyOptions` object:
```typescript
import { nifty } from '@nifty/core';
import awesome from 'nifty-plugin-awesome';

export const { css } = createNifty({
    plugins: [awesome],
});
```

If no errors are logged into the console, that means the plugins successfully registered! See below for a list of useful plugins.

## Plugins from NiftyCSS

### Autoprefixer
This plugin adds [vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) to your CSS rules.

Install it with:

```bash
# Yarn
yarn add @niftycss/plugin-autoprefixer

# NPM
npm install @niftycss/plugin-autoprefixer
```

For this given CSS:

```typescript
css({
    transition: '200ms all linear',
    boxSizing: 'border-box',
    display: 'flex',
    color: 'blue',
});
```

The plugin will generate the following CSS properties:
```css
.nifty-140hxws {
    -webkit-transition: 200ms all linear;
    transition: 200ms all linear;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    color: 'blue';
}
```

This plugin uses the [inline-style-prefixer](https://github.com/robinweser/inline-style-prefixer) library. Huge thanks to Robin Weser for maintaining this library.
(Example taken from [README](https://github.com/robinweser/inline-style-prefixer#usage))

### !important
This plugin adds the `!important` modifier to any CSS rules. To mark a rule as important, simply add the `!` character at the end of the CSS value.

Install it with:

```bash
# Yarn
yarn add @niftycss/plugin-important

# NPM
npm install @niftycss/plugin-important
```

For this given CSS:

```typescript
css({
    flexDirection: 'row!',
});
```

The plugin will generate the following CSS properties:
```css
.nifty-140hxws {
    flexDirection: row !important;
}
```

## Plugins from the community
