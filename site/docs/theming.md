---
title: 'Theming'
category: 'Features'
order: 2
---

By default, Nifty don't provide a default theme (unlike [breakpoints](/docs/breakpoints)).

## Table of Contents

## Creating a theme
A theme is a simple **key-value** object. To use your theme, pass it as the first parameter when creating a Nifty instance:

```typescript
const theme = {
    bg: '#010101',
    fg: '#FFFFFF',
};

const nifty = Nifty.create(theme);
```

## Using a theme
To use your freshly created theme, you will need to change your `style provider` to be a function, which accepts one argument: the current theme.

Usually, you will name this argument `t` (which refers to the current theme), to keep it clear and simple.

```typescript
css(t => ({
    backgroundColor: t.bg,
    display: 'flex',
}));
```

## Switching to another theme
To switch the current theme to another one (if you want a white and dark theme support for example), you can use the `setTheme` method from the Nifty instance. You can either pass the new theme object, or use a function which gives you the current theme and return the new theme:

> Each theme variation should contain the same keys.

```typescript
const whiteTheme = {
    fg: '#FFFFFF',  
};

const darkTheme = {
    fg: '#000000',
};

const { css, setTheme } = Nifty.create(whitetheme);

// ... Do stuff with styles

// Set the new theme directly
setTheme(darkTheme);

// OR set the new theme based on the current theme
setTheme(currentTheme => {
    
    return currentTheme === whiteTheme ? darkTheme : whiteTheme;
})
```
