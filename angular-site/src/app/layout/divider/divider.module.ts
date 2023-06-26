import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerRoutingModule } from './divider-routing.module';
import {DividerOverviewExample} from './divider-overview-example';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';


@NgModule({
  declarations: [DividerOverviewExample],
  imports: [
    CommonModule,
    DividerRoutingModule,
    MatListModule
  ]
})
export class DividerModule { }
