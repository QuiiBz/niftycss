---
title: 'Styling'
category: 'Features'
order: 1
---

## Table of Contents

## Basic styling
To create your first styles with NiftyCSS, start by importing the `Nifty` class and create a new instance of it:

```typescript
import { Nifty } from '@niftycss/core';

const nifty = Nifty.create({});
```

As you can see, you must pass a parameter to the `create` method, which is the theme that you want to use. It must be a **key-value** object.

We won't use any theme for now, but it is higly recommanded. Check the [theming documentation](/docs/theming) to learn more.

Then, use the `css` method to generate your first style. This will return you the class name corresponding to the styles you wrote.

Inside this method, you must provide a `style provider`, which can either be an object, or a function if you want to grab the current theme values (again, check the [theming documentation](/docs/theming) to learn more).

```typescript
const nifty = Nifty.create({});

nifty.css({
    backgroundColor: 'red',
    display: 'flex',
});
```

If you prefer, you can also destructurate the `css` method:

```typescript
const { css } = Nifty.create({});

css({
    backgroundColor: 'red',
    display: 'flex',
});
```

## Using pseudo-classes/elements
To use any pseudo-class or pseudo-element, simply write his name, and create a new object to defines the styles:
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

## Using media-queries
Refer to [breakpoints documentation](/docs/breakpoints)

## Using selectors

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

## Using `!important` modifier
