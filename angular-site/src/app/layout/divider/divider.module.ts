import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerRoutingModule } from './divider-routing.module';
import {DividerOverviewExample} from './divider-overview-example';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [DividerOverviewExample],
  imports: [
    CommonModule,
    DividerRoutingModule,
    MatListModule
  ]
})
export class DividerModule { }
