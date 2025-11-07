export interface NavItem {
    label: string;
    disabled?: boolean;
    icon: string;
    route?: string; 
    fontColor?: string; 
    role?: string[]
    children?: NavItem[]; 
    isAction?: boolean; 
    doFunction?: Function; 
}