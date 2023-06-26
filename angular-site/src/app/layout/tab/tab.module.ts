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
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {ReactiveFormsModule} from "@angular/forms";


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
    ReactiveFormsModule
  ]
})
export class TabModule { }
