import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import {ExpansionStepsExample} from "../expansion-panel/components/expansion-steps-example";
import {StepperOptionalExample} from "./components/stepper-optional-example";
import {StepperOverviewExample} from "./components/stepper-overview-example";
import {MatStepperModule} from "@angular/material/stepper";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";


@NgModule({
  declarations: [StepperComponent, StepperOptionalExample, StepperOverviewExample],
  imports: [
    CommonModule,
    StepperRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class StepperModule { }
