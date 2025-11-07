import { Component, EventEmitter, Input, Output } from '@angular/core'; 

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: false
})
export class SideBarComponent { 
 
    @Output() buttonToggeled = new EventEmitter<any>(); 
    isLargeMode: boolean = true
 
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

    toggleSidNavView = () => {
        this.isLargeMode = !this.isLargeMode
        this.buttonToggeled.emit();
    }
}
 