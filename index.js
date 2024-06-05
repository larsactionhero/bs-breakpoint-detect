export default class bsBreakpointDetect {
  constructor() {
    this.bsBreakpointDetectBPSizes = [
      '--bs-breakpoint-xxl',
      '--bs-breakpoint-xl',
      '--bs-breakpoint-lg',
      '--bs-breakpoint-md',
      '--bs-breakpoint-sm',
      '--bs-breakpoint-xs',
    ];
  }

  bsBreakpointDetectGetSize() {
    let matches = null;

    this.bsBreakpointDetectBPSizes.forEach((size) => {
      const doc = document.documentElement;
      const value = window.getComputedStyle(doc).getPropertyValue(`--breakpoint-${size}`);
      matches = window.matchMedia(`(min-width: ${value})`).matches;
    });

    window.currentBreakpoint = matches;
    document.body.dataset.currentBpBreakpoint = matches;
    return matches;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.bsBreakpointDetectGetSize();
    });

    let timer = null;
    document.addEventListener('resize', () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        this.bsBreakpointDetectGetSize();
      }, 100);
    });
  }
}
