---
title: 'Directives'
order: 4
---

Diretives are a way to write rules **faster** and **easier**. They are always prefixed by the `$` symbol.

A good example are the [breakpoints](/docs/features/breakpoints): instead of writing long and fastidious media-queries declarations, just write the name of the breakpoint and then the rules you want in an object:
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

As you can see, directives are very powerful. You can use directives with the default or [custom breakpoints](/docs/features/breakpoints#creating-custom-breakpoints), or with new directives from [plugins](/docs/features/plugins).
