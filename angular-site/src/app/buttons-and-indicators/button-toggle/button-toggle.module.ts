import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonToggleRoutingModule } from './button-toggle-routing.module';
import { ButtonToggleComponent } from './button-toggle.component';
import {ButtonToggleOverviewExample} from './components/button-toggle-overview-example';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ButtonToggleExclusiveExample} from './components/button-toggle-exclusive-example';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ButtonToggleComponent, ButtonToggleOverviewExample, ButtonToggleExclusiveExample],
  imports: [
    CommonModule,
    ButtonToggleRoutingModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class ButtonToggleModule { }
