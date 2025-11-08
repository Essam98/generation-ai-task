import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { RingStats } from '../../../../public/interfaces/RingStats';
import { RingStatsData } from '../../../../public/Data/RingStats';
import { SmallStatsData } from '../../../../public/Data/SmallStatsData';
import { Shift } from '../../../../public/interfaces/shifts';
import { ShiftData } from '../../../../public/Data/ShiftData';
import { SmallStats } from '../../../../public/interfaces/smallStates';
import { Row } from '../../../../public/interfaces/row';
import { RowData } from '../../../../public/Data/RowData';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent {
     
    ringStats: Array<RingStats> = new Array<RingStats>(...RingStatsData) 
    smallStats: Array<SmallStats> = new Array<SmallStats>(...SmallStatsData) 
    shifts: Array<Shift> = new Array<Shift>(...ShiftData) 
    rows: Array<Row> = new Array<Row>(...RowData) 
 



    filteredShifts() { } 
    onDownload() {  }
    onUpload() {   }

  


    wideStats = [
        { value: '43,303', unit: 'km', label: 'Total Distance Driven', backgroundColor: '#1F1D2B26' },
        { value: '291 hr : 23 min', unit: '', label: 'Total Hours Driven', backgroundColor: '#1F1D2B26' }
    ];


    isMobile = false;
    private destroy$ = new Subject<void>();

    constructor(private bp: BreakpointObserver) {
        this.bp.observe([Breakpoints.Handset, '(max-width: 991.98px)'])
            .pipe(
                map(state => state.matches),
                takeUntil(this.destroy$)
            )
            .subscribe(isSmall => this.isMobile = isSmall);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }


    statusOptions = [

    ]; 

}
