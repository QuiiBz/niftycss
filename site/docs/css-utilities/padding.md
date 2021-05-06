---
title: 'Padding'
order: 6
---

## Table of Contents

## paddingX 

Add the same padding amount in the X direction, which represents left and right.



### Output
 ```css
padding-left: <amount>;
padding-right: <amount>;
```



### Parameters
- ` amount` The padding amount


### Example 
```typescript
import { paddingX } from '@niftycss/css';

css({
    ...paddingX`10px`,
    ...paddingX`${inset}`
});
```

## paddingY 

Add the same padding amount in the X direction, which represents top and bottom.



### Output
 ```css
padding-top: <amount>;
padding-bottom: <amount>;
```



### Parameters
- ` amount` The padding amount


### Example 
```typescript
import { paddingY } from '@niftycss/css';

css({
    ...paddingY`10px`,
    ...paddingY`${inset}`
});
```
