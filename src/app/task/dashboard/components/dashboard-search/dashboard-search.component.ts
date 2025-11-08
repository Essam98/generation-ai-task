import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-dashboard-search',
    standalone: false,
    templateUrl: './dashboard-search.component.html',
    styleUrl: './dashboard-search.component.scss'
})
export class DashboardSearchComponent implements OnChanges {

    @Input() isMobile: boolean = false;
    searchTerm = '';

    ngOnChanges(changes: any): void {
        if (changes.isMobile.currentValue != changes.isMobile.previousValue) {
            this.isMobile = changes.isMobile.currentValue
        }
    }

}
