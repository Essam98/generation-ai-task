import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress', 
  templateUrl: './circular-progress.component.html',
  styleUrl: './circular-progress.component.scss',
  standalone: false
})
export class CircularProgressComponent { 
  @Input() value = 75; 
  @Input() size = 120; 
  @Input() startAngle = -60; 
  private readonly C = 2 * Math.PI * 42; 
  get dash(): number {
     const usable = this.C * 0.8;
    return Math.max(0, Math.min(usable, (this.value / 100) * usable));
  }
  get gap(): number {
    const usable = this.C * 0.8;
    return this.C - this.dash;
  }
}
