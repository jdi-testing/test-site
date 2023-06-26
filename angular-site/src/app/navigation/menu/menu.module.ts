import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MenuIconsExample} from './components/menu-icons-example';
import {MenuOverviewExample} from './components/menu-overview-example';
import {NestedMenuExample} from './components/nested-menu-example';
import {MatIconModule} from '@angular/material/icon';
import {_MatLegacyMenuDirectivesModule as _MatMenuDirectivesModule, MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';


@NgModule({
  declarations: [MenuComponent, MenuIconsExample, MenuOverviewExample, NestedMenuExample],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MenuModule { }
