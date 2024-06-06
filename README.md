# bs-breakpoint-detect
A vanilla javascript class to detects the current bootstrap breakpoint which
- adds value to `window.currentBreakpoint` variable,
- adds `data-bs-breakpoint` attribute and `.bs-{BREAKPOINT-SIZE}` class to document body.

Breakpoints are compatible to Bootstrap Version >= 5.2.x.  
Values from to [Bootstrap's docs](https://getbootstrap.com/docs/5.2/layout/breakpoints):


| Breakpoint | Class infix | Dimensions |
|---|---|---|
|Extra small| _None_ (`xs`) | < 576px |
|Small| `sm` | ≥ 576px |
|Medium| `md` | ≥ 768px |
|Large| `lg` | ≥ 992px |
|Extra large| `xl` | ≥ 1200px |
|Extra extra large| `xxl` | ≥ 1400px |


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
