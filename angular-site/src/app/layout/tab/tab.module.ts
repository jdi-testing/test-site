import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import {TabGroupAsyncExample} from './components/tab-group-async-example';
import {TabGroupBasicExample} from './components/tab-group-basic-example';
import {TabGroupCustomLabelExample} from './components/tab-group-custom-label-example';
import {TabGroupDynamicExample} from './components/tab-group-dynamic-example';
import {TabGroupDynamicHeightExample} from './components/tab-group-dynamic-height-example';
import {TabGroupHeaderBelowExample} from './components/tab-group-header-below-example';
import {TabGroupLazyLoadedExample} from './components/tab-group-lazy-loaded-example';
import {TabGroupThemeExample} from './components/tab-group-theme-example';
import {TabNavBarBasicExample} from './components/tab-nav-bar-basic-example';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { TabGroupPaginatedExampleComponent } from './components/tab-group-paginated-example.component';
import { TabGroupInkBarExampleComponent } from './components/tab-group-ink-bar-example.component';
import { TabGroupAnimationsExampleComponent } from './components/tab-group-animations-example.component';
import { MatSelectModule } from '@angular/material/select';
import { TabGroupAlignExampleComponent } from './components/tab-group-align-example.component';


@NgModule({
  declarations: [
    TabComponent,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    TabGroupPaginatedExampleComponent,
    TabGroupInkBarExampleComponent,
    TabGroupAnimationsExampleComponent,
    TabGroupAlignExampleComponent,
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class TabModule { }
