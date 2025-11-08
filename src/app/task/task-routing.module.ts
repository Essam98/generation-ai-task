import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, 
    {
        path: 'user',
        children: [
            { 
                path: "add",
                component: UserAddComponent 
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
