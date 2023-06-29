import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RippleRoutingModule } from './ripple-routing.module';
import {RippleOverviewExample} from './ripple-overview-example';
import {FormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core'
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [RippleOverviewExample],
  imports: [
    CommonModule,
    RippleRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatRippleModule,
    MatInputModule
  ]
})
export class RippleModule { }
