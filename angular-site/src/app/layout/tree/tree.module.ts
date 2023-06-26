import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import {TreeChecklistExample} from './components/tree-checklist-example';
import {TreeDynamicExample} from './components/tree-dynamic-example';
import {TreeFlatOverviewExample} from './components/tree-flat-overview-example';
import {TreeLoadmoreExample} from './components/tree-loadmore-example';
import {TreeNestedOverviewExample} from './components/tree-nested-overview-example';
import {MatTreeModule} from '@angular/material/tree';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';


@NgModule({
  declarations: [
    TreeComponent,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
  ],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class TreeModule { }
