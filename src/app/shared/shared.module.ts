import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { TextFieldComponent } from './ui/text-field/text-field.component';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

const shared = [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule
]


@NgModule({
    declarations: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent,
    ],
    exports: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent, 
        ...shared
    ],
    imports: [
        ...shared
    ]
})
export class SharedModule { }
