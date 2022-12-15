# CSS MINIFIER
Light and simple css minifier with no dependencies. It can be used in Node and browser.  

---
## Install
```
npm i @jjcapellan/css-minifier
```
---
## How to use
```javascript
import { minify } from '@jjcapellan/css-minifier';

const css = `
.container {
    transition: 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }`;

const minCss = minify(css);
console.log(minCss); // ".container{transition:1s cubic-bezier(.68,-.55,.265,1.55)}"
```
