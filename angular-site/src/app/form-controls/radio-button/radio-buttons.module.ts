import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonsComponent } from './radio-buttons.component';
import {RadioNgModelExample} from "./components/radio-ng-model-example";
import {RadioOverviewExample} from "./components/radio-overview-example";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import { RadioButtonsDisabledComponent } from './components/radio-buttons-disabled/radio-buttons-disabled.component';
import {MatButtonModule} from "@angular/material/button";
import { RadioButtonsLabelPositionComponent } from './components/radio-buttons-label-position/radio-buttons-label-position.component';
import { RadioButtonsRippleDisabledComponent } from './components/radio-buttons-ripple-disabled/radio-buttons-ripple-disabled.component';


@NgModule({
  declarations: [RadioButtonsComponent, RadioNgModelExample, RadioOverviewExample, RadioButtonsDisabledComponent, RadioButtonsLabelPositionComponent, RadioButtonsRippleDisabledComponent],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class RadioButtonsModule { }
