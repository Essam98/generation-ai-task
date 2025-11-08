import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-dashboard-circular-large',
    standalone: false,
    templateUrl: './dashboard-circular-large.component.html',
    styleUrl: './dashboard-circular-large.component.scss', 
})
export class DashboardCircularLargeComponent implements OnChanges {
    @Input() ringStats: any
    @Input() smallStats: any
    @Input() wideStats: any
    @Input() isMobile: any

    ngOnChanges(changes: any): void {
        if (changes.isMobile.currentValue != changes.isMobile.previousValue) { 
            this.isMobile = changes.isMobile.currentValue
        }
    }
}
