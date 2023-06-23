import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import {TableBasicExample} from './components/table-basic-example';
import {MatTableModule} from '@angular/material/table';
import {TableBasicFlexExample} from './components/table-basic-flex-example';
import {TableDynamicColumnsExample} from './components/table-dynamic-columns-example';
import {TableExpandableRowsExample} from './components/table-expandable-rows-example';
import {TableFilteringExample} from './components/table-filtering-example';
import {TableFooterRowExample} from './components/table-footer-row-example';
import {TableHttpExample} from './components/table-http-example';
import {TableMultipleHeaderFooterExample} from './components/table-multiple-header-footer-example';
import {TableOverviewExample} from './components/table-overview-example';
import {TablePaginationExample} from './components/table-pagination-example';
import {TableReorderableExample} from './components/table-reorderable-example';
import {TableRowContextExample} from './components/table-row-context-example';
import {TableSelectionExample} from './components/table-selection-example';
import {TableSortingExample} from './components/table-sorting-example';
import {TableStickyColumnsExample} from './components/table-sticky-columns-example';
import {TableStickyFooterExample} from './components/table-sticky-footer-example';
import {TableStickyHeaderExample} from './components/table-sticky-header-example';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    TablesComponent,
    TableBasicExample,
    TableBasicFlexExample,
    TableDynamicColumnsExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFooterRowExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableReorderableExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DragDropModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class TablesModule { }
