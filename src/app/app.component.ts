import { Component, computed, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SharedModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
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
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    collapsed = signal(false);

    columns = computed(() => this.collapsed() ? '5% 95%' : '20% 80%');

    toggle = () => this.collapsed.update(v => !v); 


}
