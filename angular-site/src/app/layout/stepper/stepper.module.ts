import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StepperRoutingModule } from "./stepper-routing.module";
import { StepperComponent } from "./stepper.component";
import { StepperOptionalExample } from "./components/stepper-optional-example";
import { StepperOverviewExample } from "./components/stepper-overview-example";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { StepperAnimationsExampleComponent } from "./components/stepper-animations-example.component";
import { StepperEditableExampleComponent } from "./components/stepper-editable-example.component";
import { StepperErrorsExampleComponent } from "./components/stepper-errors-example.component";
import { StepperHeaderPositionExampleComponent } from "./components/stepper-header-position-example.component";
import { StepperIntlExampleComponent } from "./components/stepper-intl-example.component";
import { MatRadioModule } from "@angular/material/radio";
import { StepperLabelPositionBottomExampleComponent } from "./components/stepper-label-position-bottom-example.component";
import { StepperLazyContentExampleComponent } from "./components/stepper-lazy-content-example.component";
import { StepperResponsiveExampleComponent } from "./components/stepper-responsive-example.component";
import { StepperStatesExampleComponent } from "./components/stepper-states-example.component";
import { MatIconModule } from "@angular/material/icon";
import { StepperVerticalExampleComponent } from './components/stepper-vertical-example.component';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    StepperComponent,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperAnimationsExampleComponent,
    StepperEditableExampleComponent,
    StepperErrorsExampleComponent,
    StepperHeaderPositionExampleComponent,
    StepperIntlExampleComponent,
    StepperLabelPositionBottomExampleComponent,
    StepperLazyContentExampleComponent,
    StepperResponsiveExampleComponent,
    StepperStatesExampleComponent,
    StepperVerticalExampleComponent,
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class StepperModule {}
