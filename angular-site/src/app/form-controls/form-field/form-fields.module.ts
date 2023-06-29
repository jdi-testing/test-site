import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldsRoutingModule } from './form-fields-routing.module';
import { FormFieldsComponent } from './form-fields.component';
import {FormFieldAppearanceExample} from './components/form-field-appearance-example';
import {FormFieldErrorExample} from './components/form-field-error-example';
import {FormFieldHintExample} from './components/form-field-hint-example';
import {FormFieldLabelExample} from './components/form-field-label-example';
import {FormFieldOverviewExample} from './components/form-field-overview-example';
import {FormFieldPrefixSuffixExample} from './components/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './components/form-field-theming-example';
import {FormFieldCustomControlExample, MyTelInput} from './components/form-field-custom-control-example';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FormFieldsComponent,
    FormFieldAppearanceExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
    FormFieldCustomControlExample,
    MyTelInput,
  ],
  imports: [
    CommonModule,
    FormFieldsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class FormFieldsModule { }
