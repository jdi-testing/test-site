import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {ListOverviewExample} from './components/list-overview-example';
import {ListSectionsExample} from './components/list-sections-example';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ListComponent, ListOverviewExample, ListSectionsExample],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class ListModule { }
