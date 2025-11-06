import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms'; 

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss',
    standalone: false
})
export class TextFieldComponent implements ControlValueAccessor {
    constructor(@Optional() @Self() public ngControl: NgControl) {
        // Let Angular know this component implements CVA for the containing control
        if (this.ngControl) this.ngControl.valueAccessor = this;
    }

    // UI inputs
    @Input() label = '';
    @Input() placeholder = '';
    @Input() hint = '';
    @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
    @Input() id = `tf-${Math.random().toString(36).slice(2)}`;
    @Input() autoComplete: 'on' | 'off' | string = 'off';
    @Input() disabled = false;
    @Input() required = false;                 // purely visual asterisk
    @Input() showValidation = true;            // toggle error rendering

    // CVA state
    value: string | number | null = null;
    private onChange: (v: any) => void = () => { };
    private onTouched: () => void = () => { };

    writeValue(val: any): void { this.value = val; }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

    onInput(e: Event) {
        const v = (e.target as HTMLInputElement).value;
        this.value = this.type === 'number' ? (v === '' ? null : Number(v)) : v;
        this.onChange(this.value);
    }

    // Helpers for validation UI
    get control() { return this.ngControl?.control ?? null; }
    get invalid() {
        const c = this.control;
        return !!(c && c.invalid && (c.touched || c.dirty));
    }
    get errorMessages(): string[] {
        const c = this.control;
        if (!c || !c.errors) return [];
        const e = c.errors;

        const msgs: string[] = [];
        if (e['required']) msgs.push('This field is required.');
        if (e['email']) msgs.push('Please enter a valid email address.');
        if (e['minlength']) msgs.push(`Minimum ${e['minlength'].requiredLength} characters.`);
        if (e['maxlength']) msgs.push(`Maximum ${e['maxlength'].requiredLength} characters.`);
        if (e['min'] !== undefined) msgs.push(`Minimum value is ${e['min'].min}.`);
        if (e['max'] !== undefined) msgs.push(`Maximum value is ${e['max'].max}.`);
        if (e['pattern']) msgs.push('Invalid format.');
        // Custom errors support:
        if (e['server']) msgs.push(e['server']); // e.g., async/server validation
        return msgs;
    }
}
