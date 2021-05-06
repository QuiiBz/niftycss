---
title: 'Production'
order: 7
---

In production (when the `NODE_ENV` environment variable is not set to `development`), Nifty will **minify** the CSS to reduce the size of it. This can reduce to up to **25%** the total size of the CSS.

Nifty will also make sure to not log debug in the console, even if `debug` in `NiftyOptions` is set to `true`.
