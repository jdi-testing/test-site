import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import {TableBasicExample} from './components/table-basic-example';
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
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { TableDynamicArrayDataExample } from './components/table-dynamic-array-data/table-dynamic-array-data-example';
import { TableDynamicObservableDataExample } from './components/table-dynamic-observable-data/table-dynamic-observable-data-example';
import { TableColumnStylingExample } from './components/table-column-styling/table-column-styling-example';
import { TableFlexLargeRowExample } from './components/table-flex-large-row/table-flex-large-row-example';
import { TableGeneratedColumnsExample } from './components/table-generated-columns/table-generated-columns-example';
import { TableRecycleRowsExample } from './components/table-recycle-rows/table-recycle-rows-example';
import { TableRowBindingExample } from './components/table-row-binding/table-row-binding-example';
import { TableStickyComplexFlexExample } from './components/table-sticky-complex-flex/table-sticky-complex-flex-example';
import { TableStickyComplexExample } from './components/table-sticky-complex/table-sticky-complex-example';
import { TableTextColumnAdvancedExample } from './components/table-text-column-advanced/table-text-column-advanced-example';
import { TableTextColumnExample } from './components/table-text-column/table-text-column-example';
import { TableWithRipplesExample } from './components/table-with-ripples/table-with-ripples-example';
import { TableWrappedExample } from './components/table-wrapped/table-wrapped-example';


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
    TableDynamicArrayDataExample,
    TableDynamicObservableDataExample,
    TableColumnStylingExample,
    TableFlexLargeRowExample,
    TableGeneratedColumnsExample,
    TableRecycleRowsExample,
    TableRowBindingExample,
    TableStickyComplexFlexExample,
    TableStickyComplexExample,
    TableTextColumnAdvancedExample,
    TableTextColumnExample,
    TableWithRipplesExample,
    TableWrappedExample
  ]
})
export class TablesModule { }
