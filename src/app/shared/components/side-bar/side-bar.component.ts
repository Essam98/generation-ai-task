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
            label: "Dashboard",
            icon: "images/sidenav/dashboard-icon.png",
            route: "",
        },
        {
            label: "Report",
            icon: "images/sidenav/report-icon.png",
            route: "saradiat/list",
        },
        {
            label: "Organization",
            icon: "images/sidenav/organization-icon.png", 
            route: "Organization",
            children: [ 
                {
                    label: "Users",
                    icon: "images/sidenav/user-icon.png",
                    route: "haser/list",
                }, 

            ]
        },
    ];
}
 