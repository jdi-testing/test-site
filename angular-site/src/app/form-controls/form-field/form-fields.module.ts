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
import {MatLegacyFormFieldControl as MatFormFieldControl, MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';



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
  ]
})
export class FormFieldsModule { }
