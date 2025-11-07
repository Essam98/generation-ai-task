
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, OnInit, HostBinding, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../../../../public/interfaces/nav';
import { NavService } from '../../../../../public/services/nav.service';


@Component({
    selector: 'app-sidenav-item-icon-mode',
    templateUrl: './sidenav-item-icon-mode.component.html',
    styleUrl: './sidenav-item-icon-mode.component.scss',
    standalone: false,
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ])
    ],
})
export class SidenavItemIconModeComponent implements OnInit {
 
    expanded: boolean = false;

    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input('item') item!: NavItem;
    @Input('depth') depth!: number;

    activeTab: string;
    isActiveTab: boolean;

    constructor(
        public router: Router,
        public navService: NavService,
        private cd: ChangeDetectorRef
    ) { }


    async ngOnInit() {
        if (this.depth === undefined) {
            this.depth = 0;
        }

        setTimeout(() => {
            console.log(this.isActiveTab);
        }, 1000)
    }

    getLastPath = async (ROUTER: string, LOCATION_PATH_NAME: string) => {
        let isActiveTab: boolean = false;
        let splitter = LOCATION_PATH_NAME.split("/");
        let lastPath = splitter[splitter.length - 1];
        isActiveTab = ROUTER.endsWith(lastPath);
        return isActiveTab
    }

    async onItemSelected(item: NavItem) {
        if (this.navService.activeTab == item.label) {
            this.navService.activeTab = null;
        } else {
            if (item?.children?.length) {
                this.navService.activeTab = item.label;
            }
        }
    }

    isActive(link: any | any[], exact: boolean = true): boolean {
        const optsExact: any = {
            paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'
        };
        const optsSubset: any = {
            paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'
        };

        // Accept string ('/path') or link commands (['/path', param])
        const tree = Array.isArray(link) ? this.router.createUrlTree(link) : link;
        return this.router.isActive(tree as any, exact ? optsExact : optsSubset);
    }

}
