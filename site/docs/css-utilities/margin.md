---
title: 'Margin'
order: 5
---

## Table of Contents

## marginX 

Add the same margin amount in the X direction, which represents left and right.



### Output
 ```css
margin-left: <amount>;
margin-right: <amount>;
```



### Parameters
- ` amount` The margin amount


### Example 
```typescript
import { marginX } from '@niftycss/css';

css({
    ...marginX`10px`,
    ...marginX`${inset}`
});
```

## marginY 

Add the same margin amount in the X direction, which represents top and bottom.



### Output
 ```css
margin-top: <amount>;
margin-bottom: <amount>;
```



### Parameters
- ` amount` The margin amount


### Example 
```typescript
import { marginY } from '@niftycss/css';

css({
    ...marginY`10px`,
    ...marginY`${inset}`
});
```
