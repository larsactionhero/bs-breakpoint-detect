# bs-breakpoint-detect
A vanilla javascript class to detects the current bootstrap breakpoint which
- adds value to `window.currentBreakpoint` variable,
- adds `data-bs-breakpoint` attribute and `.bs-{BREAKPOINT-SIZE}` class to document body.

## Installation
```npm
npm install bs-breakpoint-detect
```

## Setup
Import dependency In your javascript file: 
```javascript
import BsBreakpointDetect from 'bs-breakpoint-detect';
```

## Create new Instance and fire init:
```javascript
// create new instance
const myDetect = new BsBreakpointDetect(); 

// call init()
myDetect.init();
```

That's it! 🙂
