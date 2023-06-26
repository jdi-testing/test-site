import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import {ProgressSpinnerConfigurableExample} from './components/progress-spinner-configurable-example';
import {ProgressSpinnerOverviewExample} from './components/progress-spinner-overview-example';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {FormsModule} from '@angular/forms';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';


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
