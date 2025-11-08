import { Component, EventEmitter, Input, Output } from '@angular/core'; 
import { NavItem } from '../../../../../public/interfaces/nav';
import { NavItemsData } from '../../../../../public/Data/navItemData';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: false
})
export class SideBarComponent { 
 
    @Output() buttonToggeled = new EventEmitter<any>(); 
    isLargeMode: boolean = true
 
    items: Array<NavItem> = new Array<NavItem>(...NavItemsData)

    toggleSidNavView = () => {
        this.isLargeMode = !this.isLargeMode
        this.buttonToggeled.emit();
    }
}
 