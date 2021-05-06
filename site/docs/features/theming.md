---
title: 'Theming'
order: 3
---

By default, Nifty don't provide a default theme (unlike [breakpoints](/docs/features/breakpoints)).

## Table of Contents

## Creating a theme
A theme is a simple **key-value** object. To use your theme, pass it as the value of the `theme` property of your `NiftyOptions`:

```typescript
const theme = {
    bg: '#010101',
    fg: '#FFFFFF',
};

export const { css } = createNifty({
    theme,
    // Same as
    // theme: theme,
});
```

## Using a theme
To use your freshly created theme, append the `@` symbol and write the key of the theme value you want to use. Using [TypeScript](/docs/guides/typescript) provides auto-completion for the theme keys:

```typescript
css({
    backgroundColor: '@bg',
    display: 'flex',
});
```

When Nifty will generate the CSS, the theme keys you wrote will automatically be transformed to the value of the current theme.

## Switching to another theme
To switch the current theme to another one (if you want white and dark theme support for instance), you can use the `setTheme` method from the `nifty` meethod. You can either pass the new theme object, or use a function which gives you the current theme and return the new theme:

> Each theme variation should contain the same keys.

```typescript
const whiteTheme = {
    fg: '#FFFFFF',  
};

const darkTheme = {
    fg: '#000000',
};

export const { setTheme } = createNifty({
    theme: whitetheme,
});

// Set the new theme directly
setTheme(darkTheme);
// Set the new theme based on the current theme
setTheme(currentTheme => {
    
    return currentTheme === whiteTheme ? darkTheme : whiteTheme;
})
```
