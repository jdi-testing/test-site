import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';
import {SliderConfigurableExample} from './components/slider-configurable-example';
import {SliderFormattingExample} from './components/slider-formatting-example';
import {SliderOverviewExample} from './components/slider-overview-example';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from "@angular/material/input";
import { SliderRangeComponent } from './components/slider-range/slider-range.component';


@NgModule({
  declarations: [
    SliderComponent,
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
    SliderRangeComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule
  ]
})
export class SliderModule {}
