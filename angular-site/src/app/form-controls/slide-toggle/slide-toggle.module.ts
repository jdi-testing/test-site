import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideToggleRoutingModule } from './slide-toggle-routing.module';
import { SlideToggleComponent } from './slide-toggle.component';
import {SlideToggleOverviewExample} from "./components/slide-toggle-overview-example";
import {SlideToggleConfigurableExample} from "./components/slide-toggle-configurable-example";
import {MatLegacySlideToggleModule as MatSlideToggleModule} from "@angular/material/legacy-slide-toggle";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import {FormsModule} from "@angular/forms";
import {MatLegacyCheckboxModule as MatCheckboxModule} from "@angular/material/legacy-checkbox";


@NgModule({
  declarations: [SlideToggleComponent, SlideToggleConfigurableExample, SlideToggleOverviewExample],
  imports: [
    CommonModule,
    SlideToggleRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
  ]
})
export class SlideToggleModule { }
