export default class BsBreakpointDetect {
  constructor() {
    this.bsBreakpointDetectBreakpoints = [
      ['--bs-breakpoint-xs', 'bs-xs'],
      ['--bs-breakpoint-sm', 'bs-sm'],
      ['--bs-breakpoint-md', 'bs-md'],
      ['--bs-breakpoint-lg', 'bs-lg'],
      ['--bs-breakpoint-xl', 'bs-xl'],
      ['--bs-breakpoint-xxl', 'bs-xxl'],
    ];

    this.currentBreakpointClass = '';
  }

  bsBreakpointDetectSetBodyClass() {
    const bodyClassList = document.body.classList;
    this.bsBreakpointDetectBreakpoints.forEach((bp) => {
      if (bodyClassList.contains(bp[1])) {
        bodyClassList.remove(bp[1]);
      }
    });

    bodyClassList.add(this.currentBreakpointClass);
  }

  bsBreakpointDetectGetSize() {
    this.bsBreakpointDetectBreakpoints.forEach((bp) => {
      const doc = document.documentElement;
      const value = window.getComputedStyle(doc).getPropertyValue(bp[0]);
      const bpStr = bp[0].slice(-2);

      if (window.matchMedia(`(min-width: ${value})`).matches) {
        document.body.dataset.bsBreakpoint = bpStr;
        this.currentBreakpointClass = `bs-${bpStr}`;
        this.bsBreakpointDetectSetBodyClass();
        window.bsBreakpoint = bpStr;
      }
    });
  }

  initResizeListener() {
    let resizeTimer = null;
    
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
