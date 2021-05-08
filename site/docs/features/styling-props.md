---
title: 'Styling props'
order: 2
---

You can use `props` to define style based on custom props declared at the usage-level, or component-level if you are using the [styled](/docs/features/styling#styled-api) API.

You will of course get auto-completion when you will use the prop style, but we recommend creating a `type` to also get auto-completion inside your style declaration. See [type-safety](#type-safety).

## Table of Contents

## With `css` API
To do so, you will need to update your `styleProvider` and change it to a callback wich takes one argument, the props, and returns the styles:

```typescript
const background = css(props => ({
    background: props.bg,
}))
```

To spectify the props when using the style, call the returned function with an object containing the props at the usage-level:

```tsx
<div class={background({ bg: 'red' })} />
```

## With `styled` API
Same as the `css` API, change your `styleProvider` the same way:

```typescript
const Box = styled('div', props => ({
    background: props.bg,
}))
```

Then, you can specify the styling props directly at the component level, same as any React props:

```tsx
<Box bg='red' />
```

## Type-safety
To add types-safety, you can create a `type` that specify the schema of the props:

```typescript
// css API
type Props = {
    size: string
};

const box = css<Props>(({ size }) => ({
    width: size,
    height: size,
    background: 'red',
}));

// styled API
type Props = {
    size: string
};

const Box = styled<Props>('div', ({ size }) => ({
    width: size,
    height: size,
    background: 'red',
}));
```
