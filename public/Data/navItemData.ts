import { NavItem } from "../interfaces/nav";

export const NavItemsData: NavItem[] = [
    {
        label: "Dashboard",
        icon: "images/sidenav/dashboard-icon.png",
        route: "/",
        isShowAddButton: false
    },
    {
        label: "Report",
        icon: "images/sidenav/report-icon.png",
        route: "/report",
        isShowAddButton: false
    },
    {
        label: "Organization",
        icon: "images/sidenav/organization-icon.png",
        route: "/organization",
        isShowAddButton: false,
        children: [
            {
                label: "Invoices",
                icon: "images/sidenav/invoice-icon.png",
                route: "/invoice",
                isShowAddButton: false
            },
            {
                label: "Users",
                icon: "images/sidenav/user-icon.png",
                route: "/user/add",
                isShowAddButton: true
            },

        ]
    },
];
