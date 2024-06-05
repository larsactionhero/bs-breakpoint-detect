export default class BsBreakpointDetect {
  constructor() {
    this.bsBreakpointDetectBPSizes = [
      '--bs-breakpoint-xs',
      '--bs-breakpoint-sm',
      '--bs-breakpoint-md',
      '--bs-breakpoint-lg',
      '--bs-breakpoint-xl',
      '--bs-breakpoint-xxl',
    ];
  }

  bsBreakpointDetectGetSize() {
    this.bsBreakpointDetectBPSizes.forEach((bpSize) => {
      const doc = document.documentElement;
      const value = window.getComputedStyle(doc).getPropertyValue(bpSize);
      const size = bpSize.slice(-2);

      if (window.matchMedia(`(min-width: ${value})`).matches) {
        document.body.dataset.bsBreakpoint = size;
        window.bsBreakpoint = size;
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
