import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';
 
@NgModule({
    declarations: [
        DashboardComponent,
        UserAddComponent
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule 
    ]
})
export class TaskModule { }
