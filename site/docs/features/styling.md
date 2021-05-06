---
title: 'Styling'
order: 1
---

## Table of Contents

## Basic styling
To create your first styles with NiftyCSS, create a new file named `nifty.[js|ts]` and start by importing the `nifty` method. You will need to provide a `NiftyOptions` object, but we will cover that later.

```typescript
import { nifty } from '@niftycss/core';

export const { css } = createNifty({});
```

As you can see, we used destructuring to get a `css` method, which will be used to create your styles. We also immediately export this method, to make it available on your project.

Then, use the `css` method to generate your first style. This will return you the class name corresponding to the styles you wrote.

Inside this method, you must provide a `style provider`, which is an object containing the styles you want to define. You will automatically get **auto-completion** from your IDE:

```typescript
import { css } from 'path/to/nifty.ts';

const style = css({
    backgroundColor: 'red',
    display: 'flex',
});
```

Then, to apply your newly created style, set the `class` name of your element to this `style` variable:
```html
// React
<div className={style}>
    // ...
</div>
```

That's it! Next, see how to use specific selectors underneath, or see how to use [themes](/docs/features/theming), [breakpoints](/docs/features/breakpoints) for responsive or [CSS utilities](/docs/features/css-utilities).

## Styled API
Nifty provides a `styled` API for React, inspired by [styled-components](https://styled-components.com/).

To use it, first install the `@niftycss/react` package:

```bash
# Yarn
yarn add @niftycss/react

# NPM
npm install @niftycss/react
```

Then, replace your `createNifty` method by `createStyled` from this package. As you can see, we can get a `styled` function and we immediately export it:

```typescript
import { createStyled } from '@iftycss/react';

export const { css, styled } = createStyled({...}); 
```

To create a styled component, use this `styled` method, pass in first parameter the name of the HTML tag you want for this component and then a `styleProvider`:

```tsx
const Button = styled('button', {
    padding: '0.2rem 1rem',
    color: 'white',
    background: 'red',
});
// Use it as a normal React component
<Button>Hello</Button>
```

Any `props` passed to the style component will be transmitted to the generated React component:

```tsx
<Button onClick={() => console.log('Clicked!')}>Hello</Button>
```

To define the style based on custom props, see [styling props](/docs/features/styling-props).

## Using class names or existing Nifty styles
To use any other class name along with your Nifty style, just add a string containing the classes after the `style provider`:

```typescript
css({
    display: 'flex',
}, 'pt-0 border-b');
```

You can also use an existing Nifty style here, to inherit it styles:
```typescript
const container = css({
    display: 'flex',
    margin: 'auto',
});

css({
    display: 'flex',
}, container);
```

It's also possible to combine Nifty styles and existing class name, since the `class provider` accept an array of strings:

```typescript
css({
    display: 'flex',
}, container, 'pt-0 border-b');
```

You can add any number of existing class name of Nifty styles.

## Targeting pseudo-classes/elements
To target any pseudo-class or pseudo-element, write its name, and create a new object to defines the styles:
```typescript
css({
    ':hover': {
        borderRadius: '2px',  
    },
    '::before': {
        content: '-',
    },
});
```

## Targeting selectors

### Class / id
To target a child component with the specified class / id, prefix it with a `.` for a class and a `#` for an id, and create a new object to defines the styles:

```typescript
css({
    borderColor: '@border',
    '.box': {
        borderColor: '@boxBorder',
    },
    '#container': {
        borderColor: '@containerBorder',
    },
});
```

### HTML elements
To target any child HTML element, prefix it with a `*`, and create a new object to defines the styles:

```typescript
css({
    listStyleType: 'none',
    '*li': {
        marginTop: '1rem',
    },
    '*li a': {
        color: '@link',
    },
});
```

### Attribute
To target an HTML attribute, write its name, and create a new object to defines the styles:

```typescript
css({
    '[href="https://example.org"]': {
        color: '@link',
    },
});
```

### Adjacent sibling
To target an adjacent sibling element, prefix it with a `+`, and create a new object to defines the styles:

```typescript
css({
    '+ p': {
        fontStyle: 'bold',
    },
});
```

### Child
To target a child element, prefix it with a `>`, and create a new object to defines the styles:

```typescript
css({
    '> li': {
        margin: '2rem',
    },
});
```

## Using media-queries
See [breakpoints](/docs/features/breakpoints).

## Using vendor prefixes
See [autoprefixer plugin](/docs/features/plugins#autoprefixer).

## Using `!important` modifier
See [important plugin](/docs/features/plugins#important).