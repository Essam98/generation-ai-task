import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { TextFieldComponent } from './ui/text-field/text-field.component';
import { InputTextModule } from 'primeng/inputtext';

const shared = [ 
    FormsModule,
    ReactiveFormsModule, 
    ButtonModule,
    CommonModule,
    InputTextModule
]


@NgModule({
    declarations: [
        TextFieldComponent
    ],
    exports: [
        TextFieldComponent,
        ...shared
    ],
    imports: [    
        ...shared
    ]
})
export class SharedModule { }
