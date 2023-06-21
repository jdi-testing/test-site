import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonsComponent } from './radio-buttons.component';


@NgModule({
  declarations: [RadioButtonsComponent],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule
  ]
})
export class RadioButtonsModule { }
