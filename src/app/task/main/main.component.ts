import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
    form: FormGroup = new FormGroup({
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(10), Validators.minLength(5)]),
        age: new FormControl("", Validators.required),
    })

    constructor( ) { }

    ngOnInit(): void { 
    }

    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        // do something with this.form.value
        console.log(this.form.value);
    }
}
