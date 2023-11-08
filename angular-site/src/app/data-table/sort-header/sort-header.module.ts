import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortHeaderRoutingModule } from './sort-header-routing.module';
import {SortOverviewExample} from './sort-overview-example';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [SortOverviewExample],
  imports: [
    CommonModule,
    SortHeaderRoutingModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SortHeaderModule { }
