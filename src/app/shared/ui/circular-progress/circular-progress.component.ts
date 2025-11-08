import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-circular-progress',
    templateUrl: './circular-progress.component.html',
    styleUrls: ['./circular-progress.component.scss'],
    standalone: false
})
export class CircularProgressComponent implements AfterViewInit, OnChanges, OnDestroy {

    @Input() value = 75;
    @Input() size = 120;
    @Input() startAngle = -60;
    @Input() duration = 5000;
    @Input() gapRatio = 0.2;

    animatedValue = 0;
    displayValue = 0;

    private readonly r = 42;
    private readonly C = 2 * Math.PI * this.r;
    private rafId: number | null = null;
    private viewReady = false;

    get dash(): number {
        const usable = this.C * (1 - this.gapRatio);
        return Math.max(0, Math.min(usable, (this.animatedValue / 100) * usable));
    }
    get gap(): number {
        return this.C - this.dash;
    }

    ngAfterViewInit(): void {
        this.viewReady = true;
        this.animateTo(this.value);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.viewReady) return;
        if (changes['value']) {
            this.animateTo(this.value);
        }
    }

    ngOnDestroy(): void {
        if (this.rafId != null) cancelAnimationFrame(this.rafId);
    }

    private animateTo(target: number) {
        if (this.rafId != null) cancelAnimationFrame(this.rafId);

        const start = this.animatedValue;
        const end = this.clamp(target, 0, 100);
        const diff = end - start;
        const startTime = performance.now();

        const step = (now: number) => {
            const t = this.clamp((now - startTime) / this.duration, 0, 1);
            const eased = this.easeInOutCubic(t);

            this.animatedValue = start + diff * eased;
            this.displayValue = Math.round(this.animatedValue);

            if (t < 1) {
                this.rafId = requestAnimationFrame(step);
            } else {
                this.animatedValue = end;
                this.displayValue = Math.round(end);
                this.rafId = null;
            }
        };

        this.rafId = requestAnimationFrame(step);
    }

    private clamp(v: number, min: number, max: number) {
        return Math.max(min, Math.min(max, v));
    }

    private easeInOutCubic(x: number): number {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
}
