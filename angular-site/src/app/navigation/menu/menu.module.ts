import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MenuIconsExample} from './components/menu-icons-example/menu-icons-example';
import {MenuOverviewExample} from './components/menu-overview-example/menu-overview-example';
import {NestedMenuExample} from './components/nested-menu-example/nested-menu-example';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [MenuComponent, MenuIconsExample, MenuOverviewExample, NestedMenuExample],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
  ]
})
export class MenuModule { }
