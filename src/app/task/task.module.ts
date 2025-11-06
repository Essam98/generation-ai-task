import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { TextFieldComponent } from '../shared/ui/text-field/text-field.component';



@NgModule({
    declarations: [
        MainComponent,  
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule
    ]
})
export class TaskModule { }
