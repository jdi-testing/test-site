import {Component} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
})
export class FormFieldErrorExample {
  email = new UntypedFormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[\.]{1}[a-z]+$")]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('pattern') ? 'Not a valid email' : '';
  }
}
