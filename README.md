# bs-breakpoint-detect
A vanilla javascript class to detects the current bootstrap breakpoint which
- adds value to `window.currentBreakpoint` variable,
- adds value to body `data-bs-breakpoint` attribute.

## Installation
```npm
npm install bs-breakpoint-detect
```

## Setup
First, import dependency
```javascript
import BsBreakpointDetect from 'bs-breakpoint-detect';
```

## Create new Instance and fire init:
```javascript
const bpDetect = new BsBreakpointDetect(); // create new instance
bpDetect.init(); // call init fn
```
