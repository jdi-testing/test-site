import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideToggleRoutingModule } from './slide-toggle-routing.module';
import { SlideToggleComponent } from './slide-toggle.component';
import {SlideToggleOverviewExample} from "./components/slide-toggle-overview-example";
import {SlideToggleConfigurableExample} from "./components/slide-toggle-configurable-example";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";


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
