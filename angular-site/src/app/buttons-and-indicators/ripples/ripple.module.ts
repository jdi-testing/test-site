import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RippleRoutingModule } from './ripple-routing.module';
import {RippleOverviewExample} from './ripple-overview-example';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {FormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';


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
