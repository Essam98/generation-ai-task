import { Directive, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRefreshOnZoom]',
  standalone: false
})
export class RefreshOnZoomDirective {
  private readonly isBrowser: boolean;
  private lastDpr = 1;
  private lastZoom = 1;
  private debounceId: any;

  // NOTE: compute isBrowser & other window-dependent values in the constructor
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.lastDpr = window.devicePixelRatio ?? 1;
      this.lastZoom = this.getZoomLevel();
    }
  }

  @HostListener('window:resize')
  onResize() { this.queueCheck(); }

  @HostListener('window:wheel', ['$event'])
  onWheel(e: WheelEvent) { if (e.ctrlKey || e.metaKey) this.queueCheck(); }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    const combo = (e.ctrlKey || e.metaKey) && ['+', '=', '-', '0'].includes(e.key);
    if (combo) this.queueCheck();
  }

  @HostListener('window:gesturestart', ['$event'])
  @HostListener('window:gestureend', ['$event'])
  onGesture(_: any) { this.queueCheck(); }

  private queueCheck() {
    if (!this.isBrowser) return;
    clearTimeout(this.debounceId);
    this.debounceId = setTimeout(() => this.checkZoomChange(), 150);
  }

  private checkZoomChange() {
    if (!this.isBrowser) return;
    const dpr = window.devicePixelRatio ?? 1;
    const zoom = this.getZoomLevel();
    const dprChanged = Math.abs(dpr - this.lastDpr) > 0.001;
    const zoomChanged = Math.abs(zoom - this.lastZoom) > 0.01;

    if (dprChanged || zoomChanged) {
      this.lastDpr = dpr;
      this.lastZoom = zoom;
      location.reload();
    }
  }

  private getZoomLevel(): number {
    if (!this.isBrowser) return 1;
    const dpr = window.devicePixelRatio || 1;
    const chromiumApprox = 1 / dpr;
    const iw = window.innerWidth, ow = window.outerWidth;
    const safariApprox = ow && iw ? ow / iw : 1;
    return Math.abs(chromiumApprox - 1) > Math.abs(safariApprox - 1)
      ? chromiumApprox
      : safariApprox;
  }
}
