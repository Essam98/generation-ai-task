import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { NavItem } from '../../../../../public/interfaces/nav';
import { NavItemsData } from '../../../../../public/Data/navItemData';
 
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

    items: Array<NavItem> = new Array<NavItem>(...NavItemsData) 

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

    openMenu = () => this.menuOpen = !this.menuOpen
}
