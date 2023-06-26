import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import {ProgressBarBufferExample} from './components/progress-bar-buffer-example';
import {ProgressBarDeterminateExample} from './components/progress-bar-determinate-example';
import {ProgressBarConfigurableExample} from './components/progress-bar-configurable-example';
import {ProgressBarIndeterminateExample} from './components/progress-bar-indeterminate-example';
import {ProgressBarQueryExample} from './components/progress-bar-query-example';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {FormsModule} from '@angular/forms';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';


@NgModule({
  declarations: [ProgressBarComponent, ProgressBarBufferExample, ProgressBarDeterminateExample, ProgressBarConfigurableExample, ProgressBarIndeterminateExample, ProgressBarQueryExample],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
  ]
})
export class ProgressBarModule { }
