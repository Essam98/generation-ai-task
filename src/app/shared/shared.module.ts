import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
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
import { RefreshOnZoomDirective } from '../../../public/directives/refresh-on-zoom.directive';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CircularProgressComponent } from './ui/circular-progress/circular-progress.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip'; 
import { InputSwitchModule } from 'primeng/inputswitch';


const shared = [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RouterModule,
    SidebarModule, PanelMenuModule, AvatarModule, CardModule,
    TableModule,
    DropdownModule,
    ChipModule,
    ButtonModule,
    FormsModule,
    DatePipe,
    DecimalPipe,
    InputSwitchModule
]


@NgModule({
    declarations: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent,
        SidenavItemsComponent,
        SidenavItemIconModeComponent,
        RefreshOnZoomDirective,
        UserInfoComponent,
        CircularProgressComponent, 
    ],
    exports: [
        TextFieldComponent,
        HeaderComponent,
        SideBarComponent,
        SidenavItemsComponent,
        SidenavItemIconModeComponent,
        RefreshOnZoomDirective,
        UserInfoComponent,
        CircularProgressComponent, 
        ...shared
    ],
    imports: [
        ...shared
    ]
})
export class SharedModule { }
