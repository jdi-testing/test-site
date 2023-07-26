import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {ToolbarRoutingModule} from './toolbar-routing.module';
import {ToolbarComponent} from './toolbar.component';
import {ToolbarMultirowExample} from './components/toolbar-multirow-example';
import {ToolbarBasicComponent} from './components/toolbar-basic/toolbar-basic-example.component';
import {ToolbarOverviewComponent} from './components/toolbar-overview/toolbar-overview.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ToolbarComponent,
    ToolbarMultirowExample,
    ToolbarBasicComponent,
    ToolbarOverviewComponent
  ],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ToolbarModule {}
