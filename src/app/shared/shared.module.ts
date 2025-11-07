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
import { SidenavItemsComponent } from './ui/sidenav-items/sidenav-items.component';
import { RouterModule } from '@angular/router';
import { SidenavItemIconModeComponent } from './ui/sidenav-item-icon-mode/sidenav-item-icon-mode.component';


const shared = [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RouterModule, 
]


@NgModule({
    declarations: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent,
        SidenavItemsComponent,
        SidenavItemIconModeComponent
    ],
    exports: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent, 
        SidenavItemsComponent,
        SidenavItemIconModeComponent,
        ...shared
    ],
    imports: [
        ...shared
    ]
})
export class SharedModule { }
