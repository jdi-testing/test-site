import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectsRoutingModule } from './selects-routing.module';
import { SelectsComponent } from './selects.component';
import {SelectCustomTriggerExample} from './components/select-custom-trigger-example';
import {SelectDisabledExample} from './components/select-disabled-example';
import {SelectErrorStateMatcherExample} from './components/select-error-state-matcher-example';
import {SelectFormExample} from './components/select-form-example';
import {SelectHintErrorExample} from './components/select-hint-error-example';
import {SelectMultipleExample} from './components/select-multiple-example';
import {SelectNoRippleExample} from './components/select-no-ripple-example';
import {SelectOptgroupExample} from './components/select-optgroup-example';
import {SelectPanelClassExample} from './components/select-panel-class-example';
import {SelectResetExample} from './components/select-reset-example';
import {SelectValueBindingExample} from './components/select-value-binding-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {SelectOverviewExample} from "./components/select-overview-example";
import { SelectAriaLabelOptionComponent } from './components/select-aria-label-option/select-aria-label-option.component';
import { SelectHideSingleSelectionIndicatorOptionComponent } from './components/select-hide-single-selection-indicator-option/select-hide-single-selection-indicator-option.component';
import { SelectPlaceholderOptionComponent } from './components/select-placeholder-option/select-placeholder-option.component';


@NgModule({
  declarations: [
    SelectsComponent,
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectPanelClassExample,
    SelectResetExample,
    SelectValueBindingExample,
    SelectOverviewExample,
    SelectAriaLabelOptionComponent,
    SelectHideSingleSelectionIndicatorOptionComponent,
    SelectPlaceholderOptionComponent
  ],
  imports: [
    CommonModule,
    SelectsRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
  ]
})
export class SelectsModule { }
