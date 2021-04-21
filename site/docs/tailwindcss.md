---
title: 'Using with TailwindCSS'
category: 'Guides'
order: 5
---

You can easily use [TailwindCSS](https://tailwindcss.com) along with Nifty. To add Tailwind class to a Nifty style, write them after the declaration of the styles in a `string`:

```typescript
css({
    background: '$bg',
}, 'p-4 rounded-full');
```

To keep all the styles from Tailwind when purging, you will need to add or modify the path to the files containing the Nifty styles in the `tailwind.config.js` file:

```typescript
// tailwind.config.js
module.exports = {
    // If the files with Nifty styles are in the
    // componentsfolder and are JavaScript files
    purge: ['./components/**/*.js'],
    // If the files with Nifty styles are in the
    // components folder and are TypeScript files
    purge: ['./components/**/*.ts'],
    // ...
};
```
