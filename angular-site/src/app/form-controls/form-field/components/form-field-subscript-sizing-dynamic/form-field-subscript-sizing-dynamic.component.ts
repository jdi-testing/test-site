import {Component} from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'form-field-subscript-sizing-dynamic',
  templateUrl: './form-field-subscript-sizing-dynamic.component.html',
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}},]
})
export class FormFieldsubscriptSizingDynamicComponent {}
