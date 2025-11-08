import { Component, computed, OnDestroy, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SharedModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
    title = 'generation-ai-task';

    isMobile = false;
    private destroy$ = new Subject<void>();

    constructor(private bp: BreakpointObserver) {
        this.bp.observe([Breakpoints.Handset, '(max-width: 991.98px)'])
            .pipe(
                map(state => state.matches),
                takeUntil(this.destroy$)
            )
            .subscribe(isSmall => this.isMobile = isSmall);
        AOS.init({ once: true })
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    } 

    isCollapsed = false;    

    toggle() {
        this.isCollapsed = !this.isCollapsed;  
    }

}
