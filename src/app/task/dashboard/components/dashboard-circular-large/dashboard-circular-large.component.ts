import { Component, Input, OnChanges } from '@angular/core';
import { WideStats } from '../../../../../../public/interfaces/wideStats';
import { RingStats } from '../../../../../../public/interfaces/RingStats';
import { SmallStats } from '../../../../../../public/interfaces/smallStates';

@Component({
    selector: 'app-dashboard-circular-large',
    standalone: false,
    templateUrl: './dashboard-circular-large.component.html',
    styleUrl: './dashboard-circular-large.component.scss', 
})
export class DashboardCircularLargeComponent implements OnChanges {
    
    @Input() ringStats: Array<RingStats> = new Array<RingStats>()
    @Input() smallStats: Array<SmallStats> = new Array<SmallStats>()
    @Input() wideStats: Array<WideStats> = new Array<WideStats>()
    @Input() isMobile: boolean = false;

    ngOnChanges(changes: any): void {
        if (changes.isMobile.currentValue != changes.isMobile.previousValue) { 
            this.isMobile = changes.isMobile.currentValue
        }
    }
}
