export default class BsBreakpointDetect {
  constructor() {
    this.bsBreakpointDetectBreakpoints = [
      ['--bs-breakpoint-xs', 'bs-xs'],
      ['--bs-breakpoint-sm', 'bs-sm'],
      ['--bs-breakpoint-md', 'bs-md'],
      ['--bs-breakpoint-lg', 'bs-lg'],
      ['--bs-breakpoint-xl', 'bs-xl'],
      ['--bs-breakpoint-xxl', 'bs-xxl']
    ];
  }

  bsBreakpointDetectSetBodyClass(breakpoint) {
    const bodyClassList = document.body.classList;
    let currentBreakpointClass = '';

    this.bsBreakpointDetectBreakpoints.forEach((bp) => {
      const bpClass = bp[1];
      if (bodyClassList.contains(bpClass)) {
        bodyClassList.remove(bpClass);
      }
    });
      
    currentBreakpointClass = this.bsBreakpointDetectBreakpoints[`bs-${breakpoint}`];
    bodyClassList.add(currentBreakpointClass);
  }

  bsBreakpointDetectGetSize() {
    this.bsBreakpointDetectBreakpoints.forEach((bp) => {
      const doc = document.documentElement;
      const value = window.getComputedStyle(doc).getPropertyValue(bp[0]);
      const bpStr = bp[0].slice(-2);

      if (window.matchMedia(`(min-width: ${value})`).matches) {
        // document.body.dataset.bsBreakpoint = bpStr;
        this.bsBreakpointDetectSetBodyClass(bpStr);
        window.bsBreakpoint = bpStr;
      }
    });
  }

  initResizeListener() {
    let resizeTimer = null;

    // resize reset for mobile menu
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.bsBreakpointDetectGetSize();
      }, 100);
    });
  }

  init() {
    this.bsBreakpointDetectGetSize();
    this.initResizeListener();
  }
}
