import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import {ProgressBarBufferExample} from './components/progress-bar-buffer-example';
import {ProgressBarDeterminateExample} from './components/progress-bar-determinate-example';
import {ProgressBarConfigurableExample} from './components/progress-bar-configurable-example';
import {ProgressBarIndeterminateExample} from './components/progress-bar-indeterminate-example';
import {ProgressBarQueryExample} from './components/progress-bar-query-example';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";


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
