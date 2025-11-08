import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent {

    searchTerm = '';

    shifts = [
        { name: 'Afternoon Shift', start: '12:00 PM', end: '08:00 PM' },
        // add more if needed
    ];

    filteredShifts() {
    }

    onDownload() { /* hook your export logic here */ }
    onUpload() { /* hook your import logic here */ }

    ringStats: any[] = [
        { label: 'Active Trips', value: 300, sub: '302', ring: 99 },
        { label: 'Active Vehicles', value: 375, sub: '500', ring: 75 },
        { label: 'Under Maintenance', value: 16, sub: '20', ring: 80 },
    ];

    smallStats: any[] = [
        { label: 'In-Active Trips', value: 2 },
        { label: 'Stopped Vehicles', value: 100 },
        { label: 'Queue Maintenance', value: 4 },
        { label: 'Total Departments', value: 7 },
        { label: 'Total Fleets', value: 60 },
        { label: 'Total Drivers', value: 300 },
    ];

    wideStats = [
        { value: '43,303', unit: 'km', label: 'Total Distance Driven' },
        { value: '291 hr : 23 min', unit: '', label: 'Total Hours Driven' }
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
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'Maintenance', value: 'Maintenance' }
    ];

    rows: any[] = [
        {
            type: 'SUV',
            id: 'Bus-9265',
            plate: '04321',
            odometerKm: 55956,
            gpsDate: '2024-11-03',
            gpsTime: '13:05:50',
            deviceVendor: 'Teltonika',
            deviceCode: 'C 0 3 - 9 6 3 2 1',
            simAllowance: '1.5GB',
            fleet: 'Q22',
            status: 'Active'
        },
        // duplicate a few rows to show the list
        {
            type: 'SUV',
            id: 'Bus-9265',
            plate: '04321',
            odometerKm: 55956,
            gpsDate: '2024-11-03',
            gpsTime: '13:05:50',
            deviceVendor: 'Teltonika',
            deviceCode: 'C 0 3 - 9 6 3 2 1',
            simAllowance: '1.5GB',
            fleet: 'Q22',
            status: 'Active'
        },
        {
            type: 'SUV',
            id: 'Bus-9265',
            plate: '04321',
            odometerKm: 55956,
            gpsDate: '2024-11-03',
            gpsTime: '13:05:50',
            deviceVendor: 'Teltonika',
            deviceCode: 'C 0 3 - 9 6 3 2 1',
            simAllowance: '1.5GB',
            fleet: 'Q22',
            status: 'Active'
        },
        {
            type: 'SUV',
            id: 'Bus-9265',
            plate: '04321',
            odometerKm: 55956,
            gpsDate: '2024-11-03',
            gpsTime: '13:05:50',
            deviceVendor: 'Teltonika',
            deviceCode: 'C 0 3 - 9 6 3 2 1',
            simAllowance: '1.5GB',
            fleet: 'Q22',
            status: 'Active'
        }
    ];

}
