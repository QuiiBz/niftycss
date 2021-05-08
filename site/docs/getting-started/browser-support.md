---
title: 'Browser support'
order: 3
---

We use the [inline-style-prefixer](https://inline-style-prefixer.js.org/) library to automatically add vendor prefixes to your rules. Huge thanks to [Robin Weser](https://twitter.com/robinweser) for creating and maintaining this library.

Based on their documentation:
> It supports all major browsers with the following versions. For other, unsupported browses, we automatically use a fallback.

> It will only add prefixes if a property still needs them in one of the above-mentioned versions.
Therefore, e.g. `border-radius` will not be prefixed at all.

List of supported browsers:
- Chrome: 55+
- Android (Chrome): 55+
- Android (Stock Browser): 5+
- Android (UC): 11+
- Firefox: 52+
- Safari: 9+
- iOS (Safari): 9+
- Opera: 30+
- Opera (Mini): 12+
- IE: 11+
- IE (Mobile): 11+
- Edge: 12+

