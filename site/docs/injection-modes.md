---
title: 'Injection modes'
category: 'Features'
order: 7
---

There are two CSS injections modes:
- `injectRule`
- `textContent`

By default, the injection mode is set to `insertRule` in **development**, and `textContent` in **production**.

## Table of Contents

## Using `insertRule`

### When to use
The `insertRule` mode uses the [CSSStyleSheet API](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule) to insert the CSS rules in the DOM.

This mode is relatively fast and can be used during development. **You shouldn't use it in production** since you won't be able to modifiy the CSS rules using the DevTool.

### How to enable
This is the default injection mode, so you shouldn't need to enable it.

Use the `setInjectMode` method from the Nifty instance:

```typescript
const nifty = Nifty.create({});
nifty.setInjectMode('insertRule');

// OR
const { setInjectMode } = Nifty.create({});
setInjectMode('insertRule');
```

## Using `textContent`

### When to use
The `textContent` mode directly update the `textContent` value of a `style` tag, created by Nifty.

This mode is also very fast and can be used during both development and production. **This is the recommanded mode in production**.

### How to enable
Use the `setInjectMode` method from the Nifty instance:

```typescript
const nifty = Nifty.create({});
nifty.setInjectMode('textContent');

// OR
const { setInjectMode } = Nifty.create({});
setInjectMode('textContent');
```
