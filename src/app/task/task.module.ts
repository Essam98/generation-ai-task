import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DashboardCircularLargeComponent } from './dashboard/components/dashboard-circular-large/dashboard-circular-large.component'; 
import { DashboardSearchComponent } from './dashboard/components/dashboard-search/dashboard-search.component';
import { DashboardTableComponent } from './dashboard/components/dashboard-table/dashboard-table.component';
 
@NgModule({
    declarations: [
        DashboardComponent,
        UserAddComponent,
        DashboardCircularLargeComponent,
        DashboardSearchComponent, 
        DashboardTableComponent,
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule 
    ]
})
export class TaskModule { }
