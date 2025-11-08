import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { NavItem } from '../../../../../public/interfaces/nav';
import { NavItemsData } from '../../../../../public/Data/navItemData';

import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
declare const bootstrap: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false,
})
export class HeaderComponent implements AfterViewInit {

    @ViewChild('mainNavbar', { static: true }) mainNavbar!: ElementRef<HTMLDivElement>;
    @ViewChild('toggler', { static: true }) toggler!: ElementRef<HTMLButtonElement>;

    ngAfterViewInit(): void {
        const collapse = bootstrap.Collapse.getOrCreateInstance(this.mainNavbar.nativeElement, { toggle: false });
        this.toggler.nativeElement.addEventListener('click', () => collapse.toggle());
    }

    menuOpen: boolean = false;
    isMobile = false;
    private destroy$ = new Subject<void>();

    items: Array<NavItem> = new Array<NavItem>(...NavItemsData)

    constructor(private bp: BreakpointObserver) {
        this.bp.observe([Breakpoints.Handset, '(max-width: 700.98px)'])
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

    openMenu = () => {
        this.menuOpen = !this.menuOpen
    }
    r =() => {
        location.reload()
    }
}
