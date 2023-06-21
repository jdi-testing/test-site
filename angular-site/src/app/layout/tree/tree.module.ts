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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


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
