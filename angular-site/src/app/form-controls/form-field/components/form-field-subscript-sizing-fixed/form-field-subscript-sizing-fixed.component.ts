import {Component} from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'form-field-subscript-sizing-fixed',
  templateUrl: './form-field-subscript-sizing-fixed.component.html',
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'fixed'}},]
})
export class FormFieldsubscriptSizingFixedComponent {}
