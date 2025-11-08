import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {
    menuOpen: boolean = false;
    isMobile = false;
    private destroy$ = new Subject<void>();

    constructor(private bp: BreakpointObserver) {
        this.bp.observe([Breakpoints.Handset, '(max-width: 1591.98px)'])
            .pipe(
                map(state => state.matches),
                takeUntil(this.destroy$)
            )
            .subscribe(isSmall => this.isMobile = isSmall);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    items = [
        {
            label: "Dashboard",
            icon: "images/sidenav/dashboard-icon.png",
            route: "",
            isShowAddButton: false
        },
        {
            label: "Report",
            icon: "images/sidenav/report-icon.png",
            route: "saradiat/list",
            isShowAddButton: false
        },
        {
            label: "Organization",
            icon: "images/sidenav/organization-icon.png",
            route: "Organization",
            isShowAddButton: false,
            children: [
                {
                    label: "Invoices",
                    icon: "images/sidenav/invoice-icon.png",
                    route: "haser/list",
                    isShowAddButton: false
                },
                {
                    label: "Users",
                    icon: "images/sidenav/user-icon.png",
                    route: "haser/list",
                    isShowAddButton: true
                },

            ]
        },
    ];

    menuItems: any[] = [
        { label: 'Profile', icon: 'pi pi-user' },
        { label: 'Notifications', icon: 'pi pi-bell' },
        {
            label: 'Settings', icon: 'pi pi-cog',
            items: [{ label: 'Preferences', icon: 'pi pi-sliders-h' }, { label: 'Security', icon: 'pi pi-shield' }]
        },
        { separator: true },
        { label: 'Sign out', icon: 'pi pi-sign-out' }
    ];

    openMenu = () => this.menuOpen = !this.menuOpen
}
