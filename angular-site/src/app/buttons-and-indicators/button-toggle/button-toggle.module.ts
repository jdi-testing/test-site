import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonToggleRoutingModule } from './button-toggle-routing.module';
import { ButtonToggleComponent } from './button-toggle.component';
import {ButtonToggleOverviewExample} from './components/button-toggle-overview-example';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ButtonToggleExclusiveExample} from './components/button-toggle-exclusive-example';
import {MatIconModule} from '@angular/material/icon';
import {ButtonToggleAppearanceComponent} from "./components/button-toggle-appearance/button-toggle-appearance.component";
import { ButtonToggleDisabledComponent } from './components/button-toggle-disabled/button-toggle-disabled.component';
import { ButtonToggleVerticalComponent } from './components/button-toggle-vertical/button-toggle-vertical.component';
import { ButtonToggleDisableRippleComponent } from './components/button-toggle-disable-ripple/button-toggle-disable-ripple.component';


@NgModule({
  declarations: [ButtonToggleComponent, ButtonToggleOverviewExample, ButtonToggleExclusiveExample, ButtonToggleAppearanceComponent, ButtonToggleDisabledComponent, ButtonToggleVerticalComponent, ButtonToggleDisableRippleComponent],
  imports: [
    CommonModule,
    ButtonToggleRoutingModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class ButtonToggleModule { }
