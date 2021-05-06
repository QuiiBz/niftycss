---
title: 'Methods'
order: 2
---

## Table of Contents

## calc 

Generate the [calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc())
method with the given expression.



### Output
 ```css
calc(<expression>)
```



### Parameters
- ` expression` The expression to calculate


### Example 
```typescript
import { calc } from '@niftycss/css';

css({
    ...calc`100vw - 50px`,
    ...calc`100vh - ${navHeight}`
});
```

## box 

Generate a box of `width` x `height | width` with the given width and height.
You can omit the height to generate a square of `width` x `width`



### Output
 ```css
width: <width>;
height: <height | width>
```



### Parameters
- ` width` The width of the box
- ` height` (optional) The height of the box


### Example 
```typescript
import { box } from '@niftycss/css';

css({
    ...box`40px`,
    ...box('2rem', '1rem')
});
```
