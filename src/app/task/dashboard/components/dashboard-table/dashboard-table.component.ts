import { Component, Input } from '@angular/core';
import { Row } from '../../../../../../public/interfaces/row';

@Component({
    selector: 'app-dashboard-table',
    templateUrl: './dashboard-table.component.html',
    styleUrl: './dashboard-table.component.scss',
    standalone: false
})
export class DashboardTableComponent {

    @Input() rows: Array<Row> = new Array<Row>()
    @Input() statusOptions: Array<{ label: string, value: string }> = new Array<{ label: string, value: string }>( 
        { label: 'Active', value: 'Active' }, 
    )

}
