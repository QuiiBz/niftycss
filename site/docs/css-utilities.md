---
title: 'CSS Utilities'
category: 'Features'
order: 6
---

The `@niftycss/css` package provides many CSS utilities and helpers.

## Table of Contents

## Installation
Install the `@niftycss/css` package with your package manager of choice:

```bash
# Yarn
yarn add @niftycss/css

# NPM
npm install @niftycss/css
```

## Utilities

### marginX
Set the same value for margin in the X direction, which represent `marginLeft` and `marginRight`:

```typescript
css({
    ...marginX`10px`,
})
```

### marginY
Set the same value for margin in the Y direction, which represent `marginTop` and `marginBottom`:

```typescript
css({
    ...marginY`10px`,
})
```

### paddingX
Set the same value for padding in the X direction, which represent `paddingLeft` and `paddingRight`:

```typescript
css({
    ...paddingX`10px`,
})
```

### paddingY
Set the same value for padding in the Y direction, which represent `paddingTop` and `paddingBottom`:

```typescript
css({
    ...paddingY`10px`,
})
```

### flexCenter
Get centered horizontaly and verticaly flexbox CSS properties:

```typescript
css({
    ...flexCenter,
})
```

### flexColumn
Get flexbox in Y direction (column) CSS properties:

```typescript
css({
    ...flexColumn,
})
```

### flexRow
Get flexbox in X direction (row) CSS properties:

```typescript
css({
    ...flexRow,
})
```

## Helpers

### calc
Generate the `calc` method with the given content:

```typescript
css({
    ...calc`100vw - 50px`,
})
```
