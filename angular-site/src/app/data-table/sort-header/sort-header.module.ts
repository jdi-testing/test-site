import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortHeaderRoutingModule } from './sort-header-routing.module';
import {SortOverviewExample} from './sort-overview-example';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [SortOverviewExample],
  imports: [
    CommonModule,
    SortHeaderRoutingModule,
    MatSortModule
  ]
})
export class SortHeaderModule { }
