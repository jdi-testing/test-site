import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonsComponent } from './radio-buttons.component';
import {RadioNgModelExample} from "./components/radio-ng-model-example";
import {RadioOverviewExample} from "./components/radio-overview-example";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [RadioButtonsComponent, RadioNgModelExample, RadioOverviewExample],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule,
    MatRadioModule,
    FormsModule
  ]
})
export class RadioButtonsModule { }
