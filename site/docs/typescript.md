---
title: 'Using with TypeScript'
category: 'Guides'
order: 4
---

NiftyCSS is written in TypeScript, so you have **out-of-the-box types**.

Using TypeScript is highly recommended, since it prevents mistakes and provide a better DX.

If you use TypeScript and want to type your theme, you will need to first create a type containing the keys of your theme, and create your themes based on this type:
```typescript
type Theme = {
    bg: string,
    border: string,
    accent: string,
    textLight: string,
    textDark: string,
    code: string,
};

const whiteTheme: Theme = {
    bg: '#FFFFFF',
    border: '#E5E7EB',
    accent: '#06B6D4',
    textLight: '#6B7280',
    textDark: '#111827',
    code: '#DCDCDC',
};

const darkTheme: Theme = {
    bg: '#000000',
    border: '#374151',
    accent: '#06B6D4',
    textLight: '#9CA3AF',
    textDark: '#F9FAFB',
    code: '#DCDCDC',
};
```

This will allow getting auto-completion on the theme of style provider:
```typescript
css({
    // Shows autocompletion with
    color: '@te'
    //      @textLight
    //      @textDark
});
```
