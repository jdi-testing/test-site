import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import {CheckboxConfigurableExample} from './components/checkbox-configurable-example';
import {CheckboxOverviewExample} from './components/checkbox-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CheckboxAriaLabelComponent } from './components/checkbox-aria-label/checkbox-aria-label.component';
import { CheckboxColorComponent } from './components/checkbox-color-option/checkbox-color-option.option';
import { CheckboxDisableRipplelComponent } from './components/checkbox-disable-ripple/checkbox-disable-ripple.component';
import { CheckboxRequiredComponent } from './components/checkbox-required-option/checkbox-required-option';


@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxAriaLabelComponent,
    CheckboxColorComponent,
    CheckboxDisableRipplelComponent,
    CheckboxRequiredComponent
  ],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckboxModule { }
