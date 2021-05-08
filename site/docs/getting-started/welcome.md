---
title: 'Welcome'
order: 1
---

Welcome to the documentation of **NiftyCSS**, a CSS-in-TS, framework-agnostic library to rapidly create reusable designs.

Head hover to [CSS-in-what?](#css-in-what) to get more informations about CSS-in-TS.

See [performances](/docs/getting-started/performances) to go deeper inside how NiftyCSS works.

## Table Of Contents

## Features

- ⚡️ Fast
  - [Near-zero runtime](/docs/getting-started/performances)
  - [SSR support](/docs/features/ssr)
  - [CSS utilities](/docs/css-utilities/installation)


- ⚗️ Framework-agnostic
  - Use with [Next.js](/docs/guides/nextjs), [CRA](/docs/guides/create-react-app), [Gatsby](/docs/guides/gatsby), [Tailwind](/docs/guides/tailwindcss)...
  - [`styled` API](https://niftycss.dev/docs/features/styling#styled-api)


- 🪄 Awesome DX
  - Type-safe [styles](https://github.com/frenic/csstype)
  - [Theming](/docs/features/theming) and [plugins](/docs/features/plugins)
  - [Responsiveness](/docs/features/breakpoints)

## CSS-in-what?
CSS-in-TS is the next generation of [CSS-in-JS](https://cssinjs.org/). It combines the power of CSS-in-JS and [TypeScript](https://www.typescriptlang.org/).

This allows for a better DX (developer experience) with type-safe styles: your IDE will alert you automatically if one of your CSS rules is wrong. And no need to install a third-party extension for your IDE - it's all thanks to TypeScript.

You also get powerful features like [theming](/docs/features/theming) with auto-completion of your theme keys, or auto-completion for [styling props](/docs/features/styling-props).

> You can still use NiftyCSS with plain JavaScript, however, it is not recommended.
