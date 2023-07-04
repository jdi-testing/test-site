import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import {ToolbarMultirowExample} from './components/toolbar-multirow-example';
import {ToolbarOverviewExample} from './components/toolbar-overview-example';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ToolbarComponent, ToolbarMultirowExample, ToolbarOverviewExample],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ToolbarModule { }
