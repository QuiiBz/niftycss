---
title: 'Breakpoints'
order: 5
---

Instead of writing long media-queries declarations, you can use breakpoints [directives](/docs/features/directives). You can either use the default breakpoints or create your own.

You will get auto-completion will using TypeScript, even with custom breakpoints.

## Table of Contents

## Default breakpoints
Below are the default breakpoints keys and values, which are simply short-hands:

```typescript
//  @media (min-width: 640px)
$sm: '640px'
//  @media (min-width: 768px)
$md: '768px'
//  @media (min-width: 1024px)
$lg: '1024px'
//  @media (min-width: 1280px)
$xl: '1280px'
//  @media (min-width: 1536px)
$xxl: '1536px'
```

To use a breakpoint, simply write his name, and give it an object containing the rules for this breakpoint:
```typescript
css({
    flexDirection: 'column',
    $lg: {
        flexDirection: 'row',
    },
});
```

This code will generate the following CSS:
```css
.nifty-1yoq70y {
    flex-direction: column;
}
@media (min-width: 1024px) {
    .nifty-1yoq70y {
        flex-direction: row;
    }
}
```

## Creating custom breakpoints
Custom breakpoints are simple key-value objects. The key must start by a `$` since it is used as a [directive](/docs/directives).

Once your breakpoint object is created, pass it as the value of the `breakpoints` property of your `NiftyOptions`:

```typescript
const breakpoints = {
    $phone: '640px',
    $tablet: '768px',
    $desktop: '1024px',
};

export const { css } = createNifty({
    breakpoints,
    // Same as
    // breakpoints: breakpoints,
});
```

Use it the same way:
```typescript
css({
    flexDirection: 'column',
    $desktop: {
        flexDirection: 'row',
    },
});
```
