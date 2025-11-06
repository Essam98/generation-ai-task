import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: false
})
export class SideBarComponent {
    items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/'
        },
        {
            label: 'Analytics',
            icon: 'pi pi-chart-line',
            items: [
                { label: 'Sales', icon: 'pi pi-dollar' },
                { label: 'Traffic', icon: 'pi pi-directions' },
            ]
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            items: [
                { label: 'Profile', icon: 'pi pi-user' },
                { label: 'Security', icon: 'pi pi-shield' }
            ]
        }
    ];
}
