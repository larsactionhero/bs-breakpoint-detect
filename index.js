
export default class bsBreakpointDetect {
  constructor() {
    this.bsbDetectBreakpointSizes = [
      '--bs-breakpoint-xxl',
      '--bs-breakpoint-xl',
      '--bs-breakpoint-lg',
      '--bs-breakpoint-md',
      '--bs-breakpoint-sm',
      '--bs-breakpoint-xs'
    ];
  }

  bsbDetectGetBSBreakPoint() {
    let matches = null;
    this.bsBreakpointSizes.forEach((size) => {
      const doc = document.documentElement;
      const value = window.getComputedStyle(doc).getPropertyValue(`--breakpoint-${size}`);
      matches = window.matchMedia(`(min-width: ${value})`).matches;
    });
  
    window.currentBreakpoint = matches;
    document.body.dataset.currentBpBreakpoint = matches;
    return matches;
  }
  
  init() {
    document.addEventListener('DOMContentLoaded', this.bsbDetectGetBSBreakPoint);
  
    let bsbDetectResizeTimer = null;
    document.addEventListener('resize', () => {
      if (bsbDetectResizeTimer) clearTimeout;
      bsbDetectResizeTimer = setTimeout(() => this.bsbDetectGetBSBreakPoint, 100);
    });
  }
}
