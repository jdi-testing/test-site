import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridListRoutingModule } from './grid-list-routing.module';
import {GridListComponent} from './grid-list.component';
import {GridListOverviewExample} from './components/grid-list-overview-example';
import {GridListDynamicExample} from './components/grid-list-dynamic-example';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [GridListComponent, GridListOverviewExample, GridListDynamicExample],
  imports: [
    CommonModule,
    GridListRoutingModule,
    MatGridListModule
  ]
})
export class GridListModule { }
