import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


type Opt = { label: string; value: string };

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrl: './user-add.component.scss',
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAddComponent {
    form!: FormGroup;

    // Example options – replace with your data source if needed
    roles: any[] = [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
    ];

    departments: any[] = [
        { label: 'Fire Fighter', value: 'fire-fighter' },
        { label: 'Operations', value: 'operations' },
        { label: 'IT', value: 'it' },
    ];

    constructor(private fb: FormBuilder) { } 

    ngOnInit(): void {
        this.form = this.fb.group({
            first: ['', [Validators.required, Validators.maxLength(20), this.noWhitespace]],
            middle: ['', [Validators.maxLength(20)]],
            last: ['', [Validators.required, Validators.maxLength(20), this.noWhitespace]],
            email: ['', [Validators.required, Validators.email]],
            phone: [
                '',
                [
                    Validators.required,
                    // +XX XXX XXXX or flexible digits with spaces/dashes
                    Validators.pattern(/^\+?\d(?:[\s-]?\d){6,14}$/),
                ],
            ],
            rfidEnabled: [true],
            rfid: [ ], // enabled + required only when rfidEnabled = true
            role: [null, Validators.required],
            department: [null, Validators.required],
            avatar: [null], // file input
        });
 
    }

    // Helpers
    get f(): { [key: string]: AbstractControl  } {
        return this.form.controls;
    }

    isInvalid(name: string): boolean {
        const c = this.form.get(name)!;
        return c.invalid && (c.dirty || c.touched);
    }

    noWhitespace(control: AbstractControl): ValidationErrors | null {
        const v = (control.value ?? '').toString();
        return v.trim().length ? null : { whitespace: true };
    }

    onFileChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (!input.files || input.files.length === 0) return;

        const file = input.files[0];
        const okType = /^image\/(png|jpe?g|gif|webp)$/i.test(file.type);
        if (!okType) {
            this.f['avatar'].setErrors({ invalidType: true });
            return;
        }
        // Optional: enforce size (e.g., 5MB)
        // if (file.size > 5 * 1024 * 1024) { this.f['avatar'].setErrors({ tooLarge: true }); return; }

        this.form.patchValue({ avatar: file });
        this.f['avatar'].updateValueAndValidity();
    }

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        // If you want to exclude disabled controls (like RFID when disabled), use `this.form.value`.
        // If you want *all* controls including disabled, use `getRawValue()`.
        const payload = this.form.value;
        console.log('Submit payload:', payload);

        // TODO: call your service here
    }

}
