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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


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
