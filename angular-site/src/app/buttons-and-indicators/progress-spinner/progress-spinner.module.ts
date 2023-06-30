import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import {ProgressSpinnerConfigurableExample} from './components/progress-spinner-configurable-example';
import {ProgressSpinnerOverviewExample} from './components/progress-spinner-overview-example';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ProgressSpinnerComponent, ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatButtonModule,
  ]
})
export class ProgressSpinnerModule { }
