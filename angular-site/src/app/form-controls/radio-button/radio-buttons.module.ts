import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonsComponent } from './radio-buttons.component';
import {RadioNgModelExample} from "./components/radio-buttons-ng-model/radio-ng-model-example";
import {RadioOverviewExample} from "./components/radio-buttons-overview/radio-overview-example";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import { RadioButtonsDisabledComponent } from './components/radio-buttons-disabled/radio-buttons-disabled.component';
import {MatButtonModule} from "@angular/material/button";
import { RadioButtonsLabelPositionComponent } from './components/radio-buttons-label-position/radio-buttons-label-position.component';
import { RadioButtonsRippleDisabledComponent } from './components/radio-buttons-ripple-disabled/radio-buttons-ripple-disabled.component';
import { RadioButtonsRequiredComponent } from './components/radio-buttons-required/radio-buttons-required.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RadioButtonsComponent, RadioNgModelExample, RadioOverviewExample, RadioButtonsDisabledComponent, RadioButtonsLabelPositionComponent, RadioButtonsRippleDisabledComponent, RadioButtonsRequiredComponent],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ]
})
export class RadioButtonsModule { }
