import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {
    items = [
        { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
        { label: 'Reports', icon: 'pi pi-chart-line' },
        { label: 'Settings', icon: 'pi pi-cog' }
    ]; 
}
 