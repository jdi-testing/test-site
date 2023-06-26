import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputsComponent } from './inputs.component';
import {InputClearableExample} from './components/input-clearable-example';
import {InputErrorStateMatcherExample} from './components/input-error-state-matcher-example';
import {InputErrorsExample} from './components/input-errors-example';
import {InputFormExample} from './components/input-form-example';
import {InputHintExample} from './components/input-hint-example';
import {InputOverviewExample} from './components/input-overview-example';
import {InputPrefixSuffixExample} from './components/input-prefix-suffix-example';
import {TextFieldAutosizeTextareaExample} from './components/text-field-autosize-textarea-example';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';


@NgModule({
  declarations: [
    InputsComponent,
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    TextFieldAutosizeTextareaExample,
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class InputsModule { }
