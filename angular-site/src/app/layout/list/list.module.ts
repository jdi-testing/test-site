import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {ListOverviewExample} from './components/list-overview-example';
import {ListSectionsExample} from './components/list-sections-example';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from "@angular/material/list";
import { ListWithSelectionExampleComponent } from './components/list-with-selection-example.component';
import { ListWithSingleSelectionExampleComponent } from './components/list-with-single-selection-example.component';
import { ListVariantsExampleComponent } from './components/list-variants-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [ListComponent, ListOverviewExample, ListSectionsExample, ListWithSelectionExampleComponent, ListWithSingleSelectionExampleComponent, ListVariantsExampleComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ListModule { }
