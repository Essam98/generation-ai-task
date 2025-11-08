import { Component, signal } from '@angular/core';

type Opt = { label: string; value: string };

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrl: './user-add.component.scss',
    standalone: false
})
export class UserAddComponent {
    // Replace the initial src with your own asset if you like
    imgUrl = signal<string>('assets/avatar.jpg');

    onFileChange(evt: Event) {
        const file = (evt.target as HTMLInputElement).files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => this.imgUrl.set(reader.result as string);
        reader.readAsDataURL(file);
    }

    model = {
        first: 'Ahmed',
        middle: 'Jasim',
        last: 'Ali',
        email: 'Ahmed.Ali@company.com',
        phone: '+974 3333 4444',
        rfidEnabled: true,
        rfid: '12345',
        enabled: true,
        role: 'super-admin',
        department: 'fire-fighter'
    };

    roles: Opt[] = [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' }
    ];

    departments: Opt[] = [
        { label: 'Fire Fighter', value: 'fire-fighter' },
        { label: 'HR', value: 'hr' },
        { label: 'IT', value: 'it' }
    ];

}
