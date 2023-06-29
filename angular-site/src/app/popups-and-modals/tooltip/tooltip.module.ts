import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import {TooltipAutoHideExample} from './components/tooltip-auto-hide-example';
import {TooltipComponent} from './tooltip.component';
import {TooltipCustomClassExample} from './components/tooltip-custom-class-example';
import {TooltipDelayExample} from './components/tooltip-delay-example';
import {TooltipDisabledExample} from './components/tooltip-disabled-example';
import {TooltipMessageExample} from './components/tooltip-message-example';
import {TooltipModifiedDefaultsExample} from './components/tooltip-modified-defaults-example';
import {TooltipPositionExample} from './components/tooltip-position-example';
import {TooltipManualExample} from './components/tooltip-manual-example';
import {TooltipOverviewExample} from './components/tooltip-overview-example';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TooltipComponent,
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipPositionExample,
    TooltipManualExample,
    TooltipOverviewExample,
  ],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    ScrollingModule
  ]
})
export class TooltipModule { }
