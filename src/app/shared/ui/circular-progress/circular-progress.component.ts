import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress', 
  templateUrl: './circular-progress.component.html',
  styleUrl: './circular-progress.component.scss',
  standalone: false
})
export class CircularProgressComponent {
 /** 0..100 */
  @Input() value = 75;
  /** px */
  @Input() size = 120;
  /** starting angle in degrees (to match screenshot, use ~-60) */
  @Input() startAngle = -60;

  // circle length for r=42
  private readonly C = 2 * Math.PI * 42; // ≈ 263.89
  get dash(): number {
    // leave 20% gap so ring looks open (like screenshot)
    const usable = this.C * 0.8;
    return Math.max(0, Math.min(usable, (this.value / 100) * usable));
  }
  get gap(): number {
    const usable = this.C * 0.8;
    return this.C - this.dash;
  }
}
